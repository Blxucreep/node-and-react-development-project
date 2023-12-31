'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('UserLearningFact', [
        {
            user_id: 1,
            fact_id: 1,
            timesReviewed: 12,
        },
        {
            user_id: 1,
            fact_id: 2,
            timesReviewed: 4,
        },
        {
            user_id: 1,
            fact_id: 3,
            timesReviewed: 2,
        },
        {
            user_id: 1,
            fact_id: 4,
            timesReviewed: 0,
        },
        {
            user_id: 1,
            fact_id: 5,
            timesReviewed: 1,
        },
        {
            user_id: 1,
            fact_id: 6,
            timesReviewed: 0,
        },
        {
            user_id: 1,
            fact_id: 7,
            timesReviewed: 7,
        },
        {
            user_id: 1,
            fact_id: 8,
            timesReviewed: 23,
        },
        {
            user_id: 1,
            fact_id: 9,
            timesReviewed: 0,
        },
        {
            user_id: 1,
            fact_id: 10,
            timesReviewed: 1,
        },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserLearningFact', null, {});
  },
};