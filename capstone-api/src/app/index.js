const { Pool } = require('pg');
const express = require('express');
const app = express();
const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    port: 5428
});
require('dotenv').config();
pool.query('SELECT NOW()', (err,res)=>{
    console.log(err,res);
    pool.end();
});
app.post('/', function(req,res){
    res.send('hello there');
});
app.listen(process.env.PORT, ()=>{
    console.log(`Express listening on ${process.env.PORT}`);
});