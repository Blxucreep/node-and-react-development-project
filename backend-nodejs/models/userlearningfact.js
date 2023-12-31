// models/userlearningfact.js
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class UserLearningFact extends Model {
        static associate(models) {
            UserLearningFact.belongsTo(models.User, {
                foreignKey: 'user_id',
                targetKey: 'user_id',
            });
            UserLearningFact.belongsTo(models.LearningFact, {
                foreignKey: 'fact_id',
                targetKey: 'fact_id',
            });
        }
    }

    UserLearningFact.init({
        ulf: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        fact_id: {
            type: DataTypes.INTEGER,
        },
        timesReviewed: {
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        modelName: 'UserLearningFact',
        tableName: 'UserLearningFact',
        timestamps: false,
    });

    return UserLearningFact;
};