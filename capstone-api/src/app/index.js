require('dotenv').config();
const fs = require('fs');
const express = require('express');
const app = express();
const userQueries = require('./userQueries');
const ticketQueries = require('./ticketQueries');
const authQueries = require('./authQueries');
const cors = require('cors');
const expressJwt = require('express-jwt');
const RSA_PUBLIC_KEY = fs.readFileSync('../keys/public.key');
const checkIfAuthenticated = expressJwt({
    secret: RSA_PUBLIC_KEY
});

app.use(cors({ }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.post('/api/send-email', userQueries.sendEmail);
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

app.post('/api/auth/login', authQueries.login).get(checkIfAuthenticated, readAllUsers);
// app.post('/api/auth/signup', authQueries.signup);

app.post("api/send-email", (req, res) => {
    console.log("request came");
    let user = req.body;
    userQueries.sendEmail(user, (err, info) => {
        if (err) {
            console.log(err);
            res.status(400);
            res.send({ error: "Failed to send email" });
        } else {
            console.log("Email has been sent");
            res.send(info);
        }
    });
});

app.listen(process.env.port || 3000, () => {
    // onStart();
    console.log(`Express listening on ${process.env.port}`);
});