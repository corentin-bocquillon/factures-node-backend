'use strict';

const utils = require('../src/utils.js')
const config = require('../config/config.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
      let salt = await utils.generateSalt(config.saltSize);
      let hashedPassword = await utils.getPasswordHash('test123', salt);

      return queryInterface.bulkInsert('users', [{
          email: 'root@factures.org',
          hashedPassword: hashedPassword,
          salt: salt,
          companyName: 'TestCompany',
          companyAddress: 'TestCompany Address',
          companyNumber: '123456',
          phoneNumber: '+33101010101',
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
