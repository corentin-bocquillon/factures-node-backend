'use strict';

const { Sequelize, DataTypes, Model } = require('sequelize');

class User extends Model {
    getProfile() {
        return {
            companyName: this.companyName,
            companyAddress: this.companyAddress,
            companyNumber: this.companyNumber,
            phoneNumber: this.phoneNumber
        };
    }

    setProfile(profile, id) {
        if (profile.companyName && profile.companyAddress
            && profile.companyNumber && profile.phoneNumber) {
            let fields = {
                companyName: profile.companyName,
                companyAddress: profile.companyAddress,
                companyNumber: profile.companyNumber,
                phoneNumber: profile.phoneNumber
            };

            this.update(fields, {
                where: {
                    "id": id
                }
            });
        }
    }
}

module.exports = (sequelize, DataTypes) => {
    User.init({
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
    }, {sequelize, modelName: 'users'});

    User.associate = function(models) {
        // associations can be defined here
    };

    return User;
};
