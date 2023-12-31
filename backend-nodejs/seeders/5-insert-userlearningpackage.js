'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('UserLearningPackage', [
        {
            user_id: 1,
            package_id: 1,
            minutes: 0,
        },
        {
            user_id: 1,
            package_id: 2,
            minutes: 10,
        },
        {
            user_id: 1,
            package_id: 3,
            minutes: 12,
        },
        {
            user_id: 1,
            package_id: 4,
            minutes: 0,
        },
        {
            user_id: 1,
            package_id: 5,
            minutes: 20,
        },
        {
            user_id: 1,
            package_id: 6,
            minutes: 0,
        },
        {
            user_id: 1,
            package_id: 7,
            minutes: 34,
        },
        {
            user_id: 1,
            package_id: 8,
            minutes: 0,
        },
        {
            user_id: 1,
            package_id: 9,
            minutes: 7,
        },
        {
            user_id: 1,
            package_id: 10,
            minutes: 0,
        },
        ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserLearningPackage', null, {});
  },
};