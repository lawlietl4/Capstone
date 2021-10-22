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

const getUser = (req, res) => {
    pool.query(`SELECT * FROM ${process.env.user_table} ORDER BY id ASC`, (err, results) => {
        if (err) {
            throw err;
        } else {
            res.json(results.rows);
        }
    });
};

const getUserById = (request, response) => {
    try {
        const id = parseInt(request.params.id);
        pool.query(`SELECT * FROM ${process.env.user_table} WHERE id = $1`, [id], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json(results.rows);
        });
    } catch (err) {
        console.log(err.stack);
    }
};

const createUser = (request, response) => {
    const { name, email } = request.body;
    // console.log(request.body);
    pool.query(`INSERT INTO ${process.env.user_table} (name, email) VALUES ($1, $2)`, [name, email], (error, results) => {
        if (error) {
            throw error;
        } else {
            console.log('user inserted!');
        }
        response.status(201).send(`User added with ID: ${results.rows[0]}`);
    });
};

const updateUser = (request, response) => {
    const id = parseInt(request.params.id);
    const { name, email } = request.body;

    pool.query(
        `UPDATE ${process.env.user_table} SET name = $1, email = $2 WHERE id = $3`,
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).send(`User modified with ID: ${id}`);
        }
    );
};

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query(`DELETE FROM ${process.env.user_table} WHERE id = $1`, [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`User deleted with ID: ${id}`);
    });
};

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    getUser
};