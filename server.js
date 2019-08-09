const express = require('express');
const app = express();
const bodyParser = require('body-parser').json()

const auth = require('./firebase_Auth/firebaseApi');
const query = require('./hasuraApi/query');
const insert = require('./hasuraApi/mutation');
const del = require('./hasuraApi/delete');
const update = require('./hasuraApi/update');
const sms = require('./sms/sendsms');
const email = require('./email/sendemail');
const fileupload = require('./fileupload/upload');

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

app.post('/api/data/query/:fn', bodyParser, async (req, res) => {
    datafetch = req.body.data;
    fn = req.params.fn;
    console.log(fn);
    var data;
    try {
        if (fn == 1) {
            console.log('fn 1');
            data = await query.getUser(datafetch);
            res.send(data);
        }
        if (fn == 2) {
            console.log('fn 2');
            data = await query.getProblemwithuser(datafetch);
            res.send(data);
        }
        if (fn == 3) {
            console.log('fn 2');
            data = await query.getUser(datafetch);
            res.send(data);
        }

    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

app.post('/api/data/insert/problem', bodyParser, async (req, res) => {
    description = req.body.description;
    location = req.body.location;
    title = req.body.title;
    first_name = req.body.first_name;
    last_name = req.body.last_name;
    email = req.body.email;
    address = req.body.address;
    ph_number = req.body.ph_number;
    userid = req.body.userid;
    var data;
    try {
        data = await insert.addProblem(description, location, title, first_name, last_name, email, address, ph_number, userid);
        res.send(data);
    } catch (err) {
        res.json(err);
    }
});
app.post('/api/data/insert/user', bodyParser, async (req, res) => {
    address = req.body.address;
    email = req.body.email;
    first_name = req.body.first_name;
    last_name = req.body.last_name;
    ph_number = req.body.ph_number;
    var data;
    try {
        data = await insert.addUser(address, email, first_name, last_name, ph_number);
        res.send(data);
    } catch (err) {
        res.json(err);
    }
});
app.post('/api/data/delete/:fn', bodyParser, async (req, res) => {
    data = req.body.data;
    fn = req.params.fn;
    var result;
    try {
        if (fn == 1) {
            result = await del.deleteProblem(data);
            res.json(result);
        }
        if (fn == 2) {
            result = await del.deleteUser(data);
            res.json(result);
        }
    } catch (err) {
        res.json(err);
    }
});
app.post('/api/data/update/problems', bodyParser, async (req, res) => {
    title = req.body.title;
    description = req.body.description;
    location = req.body.location;
    var result;
    try {
        result = await update.updateProblem(title, description, location);
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});
app.post('/api/data/update/user', bodyParser, async (req, res) => {
    ph_number = req.body.ph_number;
    ph_number_new = req.body.ph_number_new;
    address = req.body.address;
    email = req.body.email;
    first_name = req.body.first_name;
    last_name = req.body.last_name;
    var result;
    try {
        result = await update.updateUser(ph_number, address, email, first_name, last_name, ph_number_new);
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});

app.post('/api/notification/sms', bodyParser, async (req, res) => {
    message = req.body.message;
    ph_number = req.body.ph_number;
    try {
        let result = await sms.sendsms(message, ph_number);
        await res.json(result.data.Status);
    } catch (error) {
        res.json(error);
    }
});
app.post('/api/notification/email', bodyParser, async (req, res) => {
    message = req.body.message;
    sendto = req.body.sendto;
    subject = req.body.subject;
    var result;
    try {
        result = await email.sendmail(sendto, subject, message);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
app.post('/api/file/upload', bodyParser, async (req, res) => {
    name = req.files.name; //name is property of input eg: <input type="file" name="my_profile_pic" />
    try {
        file = fileupload.upload(name, 'uuid for my new file + filename');
        console.log(file); //testing purpose
        res.send(file);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});