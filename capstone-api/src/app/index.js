require('dotenv').config();
const express = require('express');
const app = express();
const userQueries = require('./userQueries');
const ticketQueries = require('./ticketQueries');
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.user,
    host: process.env.host,
    password: process.env.password,
    port: process.env.db_port,
    database: process.env.database,
});

const onStart = (req, res) => {
    try {
        pool.query(`
        CREATE TABLE IF NOT EXISTS "users"(
            "id" serial PRIMARY KEY unique
            , "name" varchar(50) not null unique
            , "email" varchar(50) not null unique
         );
         CREATE TABLE IF NOT EXISTS "tickets"(
             "id" serial
             , "userName" varchar(30)
             , "email" varchar(50)
             , "loaner" varchar(5)
             , "comments" varchar(50)
             , constraint tkt_id_pk primary key ("id")
             , constraint usr_nme_fk
                  foreign key ( "userName" )
                  references users ( "name" )
             , constraint user_email_fk
                  foreign key ( "email" )
                  references users ( "email" ));`, (err,res)=>{
                    if(err){
                        console.log(err);
                    }
                    console.log(res.rows);
                });
    } catch (err) {
        console.log(err);
    }
    res.send('method worked!');
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', onStart);
app.get('/api/users', userQueries.getUser);
app.post('/api/users', userQueries.createUser);
app.get('/api/users/:id', userQueries.getUserById);
app.put('/api/users/:id', userQueries.updateUser);
app.delete('/api/users/:id', userQueries.deleteUser);

app.get('/api/tickets', ticketQueries.getTicket);
app.post('/api/tickets', ticketQueries.createTicket);
app.get('/api/tickets/:id', ticketQueries.getTicketById);
app.put('/api/tickets/:id', ticketQueries.updateTicket);
app.delete('/api/tickets/:id', ticketQueries.deleteTicket);

app.listen(process.env.port || 3000, () => {
    console.log(`Express listening on ${process.env.port}`);
});