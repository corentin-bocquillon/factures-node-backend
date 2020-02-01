'use strict';

const express = require('express');
const app = express()
const redis = require('redis');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser')

const LocalStrategy = require('passport-local').Strategy;
let RedisStore = require('connect-redis')(session)
let redisClient = redis.createClient(6379, "redis");

const port = 3000;

const auth = require('./controllers/auth.js');

// Add passport configuration
require('./config/passport.js')(passport)

app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: '&!Kwh{V%Th<z;)\-,Fwd{Et)0',
    resave: true,
    saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json())

// Add routes
require('./routes/routes.js')(app)

// Run server
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
