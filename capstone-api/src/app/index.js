require('dotenv').config();
const { Pool } = require('pg');
const express = require('express');
const app = express();
// const details = {
//     user: 'postgres',
//     host: 'localhost',
//     password: 'Ikeamonkey1',
//     db_port: '5432',
//     database: 'testdata',
//     port: '3000'
// };

// console.log(details);
const pool = new Pool({
    user: process.env.user,
    host: process.env.host,
    password: process.env.password,
    port: process.env.db_port,
    database: process.env.database,
});
console.log(pool);
const output = pool.query('SELECT * FROM users AS output', (err,res)=>{
    if(err){
        console.log(err);
    } else {
        console.log(res.rows[0]);
    }
});
console.log(output);
// console.log(sql);
// const html = `  <html>
//                     <head></head>
//                     <body>
//                         <div id='SQLQuery'>${sql}</div>
//                     </body>
//                 </html>`;
app.get('/', function (req, res) {
    res.send(`
    <html>
        <head></head>
        <body>
            <div id='SQLOutput>${output}</div>
        </body>
    </html>
    `);
});

app.post('/', function (req, res) {
    res.send('hello there');
});

app.listen(process.env.port || 3000, () => {
    console.log(`Express listening on ${process.env.port}`);
});