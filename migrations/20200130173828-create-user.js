'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
      },
      hashedpassword: {
          type: Sequelize.STRING,
          allowNull: false
      },
      salt: {
          type: Sequelize.STRING,
          allowNull: false
      },
      companyname: {
          type: Sequelize.STRING,
          allowNull: false
      },
      companyaddress: {
          type: Sequelize.STRING,
          allowNull: false
      },
      companynumber: {
          type: Sequelize.STRING,
          allowNull: false
      },
      phonenumber: {
          type: Sequelize.STRING,
          allowNull: false
      },
      createdat: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedat: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
