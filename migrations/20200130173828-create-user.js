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
      hashedPassword: {
          type: Sequelize.STRING,
          allowNull: false
      },
      salt: {
          type: Sequelize.STRING,
          allowNull: false
      },
      companyName: {
          type: Sequelize.STRING,
          allowNull: false
      },
      companyAddress: {
          type: Sequelize.STRING,
          allowNull: false
      },
      companyNumber: {
          type: Sequelize.STRING,
          allowNull: false
      },
      phoneNumber: {
          type: Sequelize.STRING,
          allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
