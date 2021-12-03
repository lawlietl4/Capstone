require('dotenv').config();
const Pool = require('pg').Pool;
const express = require('express');
const app = express();
const SHA = require('crypto-js/sha256');

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
    let { password, username } = req.body;
    console.log(username);
    pool.query(`SELECT password, name FROM login WHERE username=$1`, [username], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result.rows[0].password == SHA(password)) {
                authenticated = true;
                helper = result.rows[0].name;
                // console.log(helper);
                res.status(200).json({authenticated: authenticated, helper: helper});
                // return 
            } else {
                authenticated = false;
                console.log("I didn't work");
                return res.status(403);
            }
        }
    });
};

const register = (req, res) => {
    let { username, password, name } = req.body;
    password = SHA(password).toString();
    // console.log(password);
    pool.query(`INSERT INTO login (name, username, password) VALUES ($1,$2,$3)`, [name, username, password], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500);
        }
        else {
            return res.status(200);
        }
    });
};

module.exports = {
    login,
    register,
};