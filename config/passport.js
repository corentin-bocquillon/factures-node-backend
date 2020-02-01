'use strict';

const Utils = require('../src/utils.js')
const database = require('../models/index.js');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
    passport.use(new LocalStrategy((username, password, done) => {
        database['users'].findOne({where: { email: username }}).then(async (user) => {
            let hashedPassword = await Utils.getPasswordHash(password, user.salt);
            if (hashedPassword === user.hashedPassword) {
                return done(null, user);
            } else {
                console.log('Incorrect password.');
                return done(null, false, { message: 'Incorrect password.' });
            }
        }).catch(err => {
            console.log('Incorrect username.');
            return done(null, false, { message: 'Incorrect username.' });
        });
    }));

    passport.serializeUser((user, done) => {
        if(user) done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        database['users'].findByPk(id).then(user => {
            if (user) {
                done(null, user);
            } else {
                done(null, null);
            }
        })
    });
}
