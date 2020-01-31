'use strict';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        email: DataTypes.STRING,
        hashedPassword: DataTypes.STRING,
        salt: DataTypes.STRING,
        companyName: DataTypes.STRING,
        companyAddress: DataTypes.STRING,
        companyNumber: DataTypes.STRING,
        phoneNumber: DataTypes.STRING
    }, {});
    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
};
