require('dotenv').config();
const express = require('express');
const app = express();
const userQueries = require('./userQueries');
const ticketQueries = require('./ticketQueries');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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