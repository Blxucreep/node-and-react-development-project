'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('UserLearningFact', {
        ulf: {
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
        fact_id: {
            type: Sequelize.INTEGER,
            references: {
            model: 'LearningFact',
            key: 'fact_id', 
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        timesReviewed: {
            type: Sequelize.INTEGER,
        },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('UserLearningFact');
  }
};