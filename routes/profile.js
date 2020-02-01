'use strict';

const auth = require('../controllers/auth.js');
const profile = require('../controllers/profile.js');

module.exports = app => {
    app.route('/api/profile')
        .all(auth.isLoggedIn)
        .get(profile.get)
        .post(profile.post);
};
