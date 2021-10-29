require('dotenv').config();
const Pool = require('pg').Pool;
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
    user: process.env.user,
    host: process.env.host,
    password: process.env.password,
    port: process.env.db_port,
    database: process.env.database,
});

const getTicket = (req, res) => {
    pool.query(`SELECT * FROM ${process.env.ticket_table} ORDER BY id DESC`, (err, results) => {
        if (err) {
            throw err;
        } else {
            return res.json(results.rows);
        }
    });
};

const getTicketById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query(`SELECT * FROM ${process.env.ticket_table} WHERE id = $1`, [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};

const createTicket = (request, response) => {
    const { name, email, loaner, comments } = request.body;
    // console.log(request.body);
    pool.query(`INSERT INTO ${process.env.ticket_table} (name, email,loaner,comments) VALUES ($1, $2)`, [name, email, loaner, comments], (error, results) => {
        if (error) {
            throw error;
        } else {
            console.log('user inserted!');
        }
        response.status(201).send(`User added with ID: ${results.rows[0]}`);
    });
};

const updateTicket = (request, response) => {
    const id = parseInt(request.params.id);
    const { name, email, loaner, comments } = request.body;

    pool.query(
        `UPDATE ${process.env.ticket_tables} SET name = $1, email = $2, loaner = $3, comments = $4 WHERE id = $5`,
        [name, email, loaner, comments, id],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).send(`User modified with ID: ${id}`);
        }
    );
};

const deleteTicket = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query(`DELETE FROM ${process.env.ticket_table} WHERE id = $1`, [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`User deleted with ID: ${id}`);
    });
};

const emailQuery = (req,response)=>{
    const id = parseInt(req.params.id);

    pool.query(`SELECT email FROM ${process.env.ticket_table} WHERE id=$1`, [id], (err, results)=>{
        if(err){
            console.log(err);
        }
        response.status(200).send(`user email pulled with id: ${id}`);
    });
};

module.exports = {
    createTicket,
    updateTicket,
    deleteTicket,
    getTicketById,
    getTicket,
    emailQuery
};