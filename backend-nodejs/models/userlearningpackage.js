// models/userlearningpackage.js
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class UserLearningPackage extends Model {
        static associate(models) {
            UserLearningPackage.belongsTo(models.User, {
                foreignKey: 'user_id',
                targetKey: 'user_id',
            });
            UserLearningPackage.belongsTo(models.LearningPackage, {
                foreignKey: 'package_id',
                targetKey: 'package_id',
            });
        }
    }

    UserLearningPackage.init({
        ulp: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        package_id: {
            type: DataTypes.INTEGER,
        },
        minutes: {
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        modelName: 'UserLearningPackage',
        tableName: 'UserLearningPackage',
        timestamps: false,
    });

    return UserLearningPackage;
};