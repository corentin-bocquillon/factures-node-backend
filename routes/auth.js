'use strict';

const auth = require('../controllers/auth.js');

module.exports = app => {
    // Authentication
    app.post('/api/authenticate', auth.authenticate(), (req, res) => {
        res.status(200).json({"statusCode": 200 , "message": res.user});
    });

    // Logout
    app.get('/api/logout', auth.logout);
};
