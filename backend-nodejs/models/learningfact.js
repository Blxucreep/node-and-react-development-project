// models/learningfact.js
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class LearningFact extends Model {
        static associate(models) {
            LearningFact.belongsTo(models.LearningPackage, {
                foreignKey: 'package_id',
                targetKey: 'package_id',
            });
        }
    }

    LearningFact.init({
        fact_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        fact: {
            type: DataTypes.STRING,
        },
        package_id: {
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        modelName: 'LearningFact',
        tableName: 'LearningFact',
        timestamps: false,
    });

    return LearningFact;
};