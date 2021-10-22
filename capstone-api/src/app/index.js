require('dotenv').config();
const express = require('express');
const app = express();
const db = require('../queries');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', db.getUser);
app.post('/data', db.createUser);
app.get('/data/:id', db.getUserById);
app.put('/data/:id', db.updateUser);
app.delete('/data/:id', db.deleteUser);
app.listen(process.env.port || 3000, () => {
    console.log(`Express listening on ${process.env.port}`);
}); 