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

const utils = require('./src/utils.js')

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

// Auth middleware
const auth = () => {
    return (req, res, next) => {
        passport.authenticate('local', (error, user, info) => {
            if(error) {
                res.status(401).json({"statusCode": 401, "message": "error : " + error.toString()});
            } else if(!user) {
                res.status(401).json({"statusCode": 401, "message": "User does not exist"});
            } else {
                req.login(user, function(error) {
                    if (error) return next(error);
                    next();
                });
            }
        })(req, res, next);
    }
}

// isLoggedIn guard
const isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        return next()
    }
    return res.status(400).json({"statusCode" : 400, "message" : "Not authenticated"})
}

// Authentication
app.post('/api/authenticate', auth(), (req, res) => {
    res.status(200).json({"statusCode": 200 , "message": res.user});
});

// Logout
app.get('/api/logout', function(req, res) {
    req.logout();
    res.status(200).json({"statusCode": 200, "message": "Logged out."});
});

// Getting profile
app.get('/api/get-profile', isLoggedIn, (req, res) => {
    
});

// Generate a bill
// app.post('/api/generate-bill', isLoggedIn, (req, res) => {
//     res.status(200).json({"statusCode": 200, "message": "Error, facture not generated."});
// });

// Run server
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
