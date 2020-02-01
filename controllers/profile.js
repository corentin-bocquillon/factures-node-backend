'use strict';

const User = require('../models/index.js')['users'];

module.exports = {
    get: (req, res) => {
        res.status(200).json(User.findByPk(req.user.id));
    },

    post: (req, res) => {
        User.update(req.body, {
            where: {
                "id": req.user.id
            }
        });
    }
};
