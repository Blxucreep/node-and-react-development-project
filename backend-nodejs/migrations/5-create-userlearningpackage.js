'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('UserLearningPackage', {
        ulp: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: Sequelize.INTEGER,
            references: {
            model: 'User',
            key: 'user_id', 
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        package_id: {
            type: Sequelize.INTEGER,
            references: {
            model: 'LearningPackage',
            key: 'package_id', 
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        minutes: {
            type: Sequelize.INTEGER,
        },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('UserLearningPackage');
  }
};