// models/LearningPackage.js
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class LearningPackage extends Model {
        static associate(models) {
            LearningPackage.hasMany(models.LearningFact, {
                foreignKey: 'package_id',
                targetKey: 'package_id',
            });
        }
    }

    LearningPackage.init({
        package_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        category: {
            type: DataTypes.STRING,
        },
        level: {
            type: DataTypes.INTEGER,
        },
        prerequisite: {
            type: DataTypes.STRING,
        },
        tags: {
            type: DataTypes.STRING,
        },
        license: {
            type: DataTypes.STRING,
        },
    }, {
        sequelize,
        modelName: 'LearningPackage',
        tableName: 'LearningPackage',
        timestamps: false,
    });

    return LearningPackage;
};