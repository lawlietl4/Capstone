require('dotenv').config();
const Pool = require('pg').Pool;
const express = require('express');
const app = express();
const crypto = require('crypto');
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
    pool.query(`SELECT * FROM ${process.env.login_table} WHERE username=$1`, [username], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            return res.json(results.rows);
        }
    });
};

module.exports = {
    login,
};