const express = require('express');

const port = 7000;

const app = express();

app.set('view engine', 'ejs');

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, 'uploads')));

app.use(express.urlencoded());

const db = require('./config/db');

const passport = require('passport');

const session = require('express-session')

const passportLocal = require('./config/passportstratagy');

app.use(session({
    secret: 'shreya',
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes/userroutes'));

app.listen(port, (error) => {
    if (error) {
        console.log(error);
        return false;
    }
    console.log(`server start on port ${port}`);
})