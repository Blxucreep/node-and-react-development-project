// models/User.js
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {

        }
    }

    User.init({
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        minutesPerDayObjective: {
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'User',
        timestamps: false,
    });

    return User;
};