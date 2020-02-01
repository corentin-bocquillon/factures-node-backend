'use strict';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        hashedPassword: {
            type: DataTypes.STRING,
            allowNull: false
        },
        salt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        companyName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        companyAddress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        companyNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {});
    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
};
