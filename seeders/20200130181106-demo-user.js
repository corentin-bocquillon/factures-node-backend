'use strict';

const getPasswordHash = require('../src/password.js').getPasswordHash

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('User', [{
          email: 'root@factures.org',
          password: await getPasswordHash('test123'),
          companyName: 'TestCompany',
          companyAddress: 'TestCompany\nAddress',
          companyNumber: '123456',
          phoneNumber: '+33101010101'
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
