'use strict';

const express = require('express');
const app = express()
const redis = require('redis');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser')

const LocalStrategy = require('passport-local').Strategy;
let RedisStore = require('connect-redis')(session)
let redisClient = redis.createClient({
    url: "redis://redis:6379"
})

const port = 3000;

passport.use(new LocalStrategy(
    function(username, password, done) {
        if(username === "admin" && password === "admin"){
            return done(null, username);
        } else {
            return done("unauthorized access", false);
        }
    }
));

passport.serializeUser(function(user, done) {
    if(user) done(null, user);
});
  
passport.deserializeUser(function(id, done) {
    done(null, id);
});

app.use(session({
    store: new RedisStore({redisClient}),
    secret: '&!Kwh{V%Th<z;)\-,Fwd{Et)0',
    resave: true,
    saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json())

const auth = () => {
    return (req, res, next) => {
        passport.authenticate('local', (error, user, info) => {
            if(error) res.status(400).json({"statusCode" : 200 ,"message" : error});
            req.login(user, function(error) {
                if (error) return next(error);
                next();
            });
        })(req, res, next);
    }
}

app.post('/api/authenticate', auth(), (req, res) => {
    res.status(200).json({"statusCode": 200 , "message": res.user});
});

const isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        return next()
    }
    return res.status(400).json({"statusCode" : 400, "message" : "not authenticated"})
}

app.get('/api/authenticate', (req, res) => {
    res.status(200).json({"statusCode": 200, "message": "test narusite"})
});

app.post('/api/generate-facture', isLoggedIn, (req, res) => {
    res.status(200).json({"statusCode": 200, "message": "Error, facture not generated."});
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
