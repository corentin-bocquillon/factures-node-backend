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

    User.getProfile = () {
        return {
            companyName: this.companyName,
            companyAddress: this.companyAddress,
            companyNumber: this.companyNumber,
            phoneNumber: this.phoneNumber
        };
    };

    User.setProfile = (profile, id) => {
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
    };

    return User;
};
