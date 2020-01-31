'use strict';

const crypto = require('crypto');
const util = require('util');

module.exports = {
    getPasswordHash: (password) => {
        return new Promise((resolve, reject) => {
            const saltSize = 256;
            const sha256 = crypto.createHash('sha256');

            let salt = await util.promisify(crypto.randomBytes)(saltSize);
            sha256.update(password+salt, 'utf8');
            resolve(sha256.digest('hex'));
        })
    }
};
