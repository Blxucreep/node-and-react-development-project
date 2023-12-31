'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('UserLearningFact', [
        {
            user_id: 1,
            fact_id: 1,
            timesReviewed: 0,
        },
        {
            user_id: 1,
            fact_id: 2,
            timesReviewed: 0,
        },
        {
            user_id: 1,
            fact_id: 3,
            timesReviewed: 0,
        },
        {
            user_id: 1,
            fact_id: 4,
            timesReviewed: 0,
        },
        {
            user_id: 1,
            fact_id: 5,
            timesReviewed: 0,
        },
        {
            user_id: 1,
            fact_id: 6,
            timesReviewed: 0,
        },
        {
            user_id: 1,
            fact_id: 7,
            timesReviewed: 0,
        },
        {
            user_id: 1,
            fact_id: 8,
            timesReviewed: 0,
        },
        {
            user_id: 1,
            fact_id: 9,
            timesReviewed: 0,
        },
        {
            user_id: 1,
            fact_id: 10,
            timesReviewed: 0,
        },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserLearningFact', null, {});
  },
};