const User = require('../models/index.js')['users'];

module.exports = {
    get: (req, res) => {
        User.findByPk(req.user.id).then(user => {
            res.status(200).json(user.getProfile());
        });
    },

    post: (req, res) => {
        User.setProfile(req.body, req.user.id);
        res.status(200);
    }
};
