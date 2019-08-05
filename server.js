const express = require('express');
const app = express();
const bodyParser = require('body-parser').json()
const auth = require('./firebase_Auth/firebaseApi');

const port = 8080 | process.env.PORT;

app.post('/api/auth/login', bodyParser, async (req, res) => {
    email = req.body.email;
    password = req.body.password;
    try {
        let user = await auth.signin(email, password);
        res.send(user);
    } catch (error) {
        console.log(error);
    }
});

app.post('/api/auth/signup', bodyParser, async (req, res) => {
    email = req.body.email;
    password = req.body.password;
    try {
        let user = await auth.signup(email, password);
        res.send(user);
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});