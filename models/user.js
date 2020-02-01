'use strict';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        hashedpassword: {
            type: DataTypes.STRING,
            allowNull: false
        },
        salt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        companyname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        companyaddress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        companynumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phonenumber: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {});
    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
};
