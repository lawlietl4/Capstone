require('dotenv').config();
const Pool = require('pg').Pool;
const express = require('express');
const app = express();
const AES = require('crypto-js/aes');
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
    var authenticated = false;
    let helper = '';
    let{password, username} = req.body;
    pool.query(`SELECT password FROM login WHERE username=$1`, [username], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if(AES.decrypt(res.json(result.rows),key) == password){
                console.log('I worked');
                authenticated=true;
                helper=result[1];
                res.status(200);
                return authenticated, helper;
            } else {
                authenticated = false;
                console.log("I didn't work");
                return res.status(403);
            }
        }
    });
};

const register = (req,res) => {
    let {username, password, name} = req.body;
    password = AES.encrypt(password,key).toString();
    pool.query(`INSERT INTO login (name, username, password) VALUES ($1,$2,$3)`,[name,username,password],(err,results) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(results);
            return res.json(results.rows);
        }
    });
};

module.exports = {
    login,
    register,
};