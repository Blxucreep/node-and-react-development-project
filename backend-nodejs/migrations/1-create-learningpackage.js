'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('LearningPackage', {
      package_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING,
      },
      level: {
        type: Sequelize.INTEGER,
      },
      prerequisite: {
        type: Sequelize.STRING,
      },
      tags: {
        type: Sequelize.STRING,
      },
      license: {
        type: Sequelize.STRING,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('LearningPackage');
  }
};
