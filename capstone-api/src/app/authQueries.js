require('dotenv').config();
const Pool = require('pg').Pool;
const express = require('express');
const app = express();
const CryptoJS = require('crypto');
const key = process.env.key;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let pool = new Pool({
    user: process.env.user,
    host: process.env.host,
    password: process.env.password,
    port: process.env.db_port,
    database: process.env.database,
});

const login = (req, res) => {
    const username = req.params.username;
    const password = req.params.password;
    pool.query(`SELECT * FROM ${process.env.login_table} WHERE username=$1 AND password=$2`, [username, CryptoJS.AES.decrypt(password,key)], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            return res.json(results.rows);
        }
    });
};

const register = (req,res) => {
    const username = req.params.username;
    const password = req.params.password;
    const name = req.params.name;
    pool.query(`INSERT INTO users(name, username, password)VALUES($1,$2,$3)`,[name,username,CryptoJS.AES.encrypt(password,key)],(err,results) => {
        if(err){
            console.log(err);
        } else {
            return res.json(results.rows);
        }
    });
};

module.exports = {
    login,
    register,
};