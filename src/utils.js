'use strict';

const crypto = require('crypto');
const util = require('util');

module.exports = {
    generateSalt: (size) => {
        return util.promisify(crypto.randomBytes)(size);
    },

    getPasswordHash: (password, salt) => {
        return new Promise((resolve, reject) => {
            const sha256 = crypto.createHash('sha256');
            sha256.update(password+salt, 'utf8');
            resolve(sha256.digest('hex'));
        })
    }
};
