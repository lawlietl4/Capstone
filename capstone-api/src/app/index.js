require('dotenv').config();
const express = require('express');
const app = express();
const userQueries = require('./userQueries');
const ticketQueries = require('./ticketQueries');
const { Pool } = require('pg');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    port: 587,
    host: process.env.mail_host,
    auth: {
        user: process.env.username,
        pass: process.env.email_password
    },
    secure: true 
});

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
                  references users ( "email" ));
        INSERT INTO users(name,email)VALUES('Nick Roberson','niroberson@student.neumont.edu');
        INSERT INTO tickets(userName,email,loaner,comments)VALUES('Nick Roberson','niroberson@student.neumont.edu','12452','dropped laptop while walking to class')`, (err, result) => {
            if (err) {
                console.log(err);
            }
            // console.log(result.rows);
        });
    } catch (err) {
        console.log(err);
    }
    res.send('method worked!');
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', onStart);
// app.get('/api', listAll);
app.post('/api/send-mail', (req, res) => {
    const mailData = {
        from: `${process.env.username}`,
        to: `${ticketQueries.emailQuery}`,
        subject: 'Laptop Repaired',
        text: 'Your Laptop has been repaired',
        html: `<b>Hey ${userQueries.nameQuery},</b>
                <br>Your laptop has been repaired, please come by and get your laptop at your earliest convenience</br>
                <br></br>
                <br>Thanks,</br>
                <br>Student Support</br>`
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({ message: "Mail sent", message_id: info.messageId });
    });
    console.log(ticketQueries.emailQuery);
});

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
    // onStart();
    console.log(`Express listening on ${process.env.port}`);
});