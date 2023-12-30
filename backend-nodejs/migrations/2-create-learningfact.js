'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('LearningFact', {
      fact_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
      },
      fact: {
        type: Sequelize.STRING,
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
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('LearningFact');
  }
};