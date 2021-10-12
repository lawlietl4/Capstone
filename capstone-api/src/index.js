import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import {
    v4 as uuidv4
} from 'uuid';
// import passport from 'passport';

const app = express();

var session = require("express-session"), bodyParser = require("body-parser");
app.use(express.static('src'));
app.use(session({ secret: "password" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//beginner example methods for API
app.get('/', (req, res) => {
    var username = 'username';
    // res.cookie('userIsLoggedIn',username,{maxAge:10800}).send("cookie set");
    // console.log(document.cookie);
    return res.redirect(307, "./");
});

app.post('/', (req, res) => {
    return res.send('received a POST HTTP method');
});

app.put('/', (req, res) => {
    return res.send('received a put HTTP method');
});

app.delete('/', (req, res) => {
    return res.send('received a delete HTTP method');
});

app.get('/users', (req, res) => {
    return res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
    return res.send(users[req.params.userId]);
});

app.put('/users/:userid', (req, res) => {
    return res.send(`PUT HTTP method on user/${req.params.userid} resource`);
});

app.delete('/users/:userId', (req, res) => {
    res.send(`DELETE HTTP method used on user/${req.params.userId} resource`);
})

//example data for the server since postgres is empty
let users = {
    1: {
        id: '1',
        username: "bob johns"
    },
    2: {
        id: '2',
        username: 'john smith'
    },
};

let messages = {
    1: {
        id: '1',
        text: 'hello world',
        userId: '1'
    },
    2: {
        id: '2',
        text: 'bye world',
        userid: '2'
    },
};

//GETting information from the server
app.get('/messages', (req, res) => {
    return res.send(Object.values(messages));
});

app.get('/messages/:messageId', (req, res) => {
    return res.send(messages[req.params.messageId]);
});

app.post('/messages', (req, res) => {
    const id = uuidv4();
    const message = {
        id,
        text: req.body.text,
        userId: req.me.id,
    };
    messages[id] = message;
    return res.send(message);
});

app.use((req, res, next) => {
    req.me = users[1];
    next();
});

app.delete('/messages/:messageId', (req, res) => {
    const {
        [req.params.messageId]: message,

    } = messages;

    messages = otherMessages;

    return res.send(message);
})

//returns current "session"
app.get('/session', (req, res) => {
    return res.send(users[req.me.id]);
});

//using environment variable for port
app.listen(process.env.PORT, () =>
    console.log(`Express Example listening to port ${process.env.PORT}`),
);

//redirects
app.get('/from', (req, res) => {
    res.redirect(308, '/to');
});

app.get('/to', (req, res) => {
    res.send(req.body.message);
});
