const User = require('../models/index.js')['users'];

module.exports = {
    get: (req, res) => {
        User.findByPk(req.user.id).then(user => {
            res.status(200).json(user.get({ plain: true }));
        });
    },

    post: (req, res) => {
        User.update(req.body, {
            where: {
                "id": req.user.id
            }
        });
        res.status(200);
    }
};
