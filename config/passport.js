'use strict';

const Utils = require('../src/utils.js')
const User = require('../models/user.js');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
    passport.use(new LocalStrategy((username, password, done) => {
        User.findOne({where: { email: username }}).then(async (user) => {
            let hashedPassword = await Utils.getPasswordHash(password, user.salt);
            if (hashedPassword === user.hashedPassword) {
                return done(null, err);
            } else {
                return done(null, false, { message: 'Incorrect password.' });
            }
        }).catch(err => {
            return done(null, false, { message: 'Incorrect username.' });
        });
    }));

    passport.serializeUser((user, done) => {
        if(user) done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findByPk(id).then(user => {
            if (user) {
                done(null, user);
            } else {
                done(null, null);
            }
        })
    });
}
