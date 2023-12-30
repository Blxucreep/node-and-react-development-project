'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('LearningPackage', [
      {
        title: 'Learn HTML',
        description: 'Learn HTML in 30 minutes',
        category: 'Web Development',
        level: 3,
        prerequisite: 'None',
        tags: 'HTML, Web Development, Frontend',
        license: 'None',
      },
      {
        title: 'Learn CSS',
        description: 'Learn CSS in 40 minutes',
        category: 'Web Development',
        level: 5,
        prerequisite: 'Learn HTML',
        tags: 'CSS, Web Development, Frontend',
        license: 'None',
      },
      {
        title: 'Learn Javascript',
        description: 'Learn Javascript in 50 minutes',
        category: 'Web Development',
        level: 7,
        prerequisite: 'Learn CSS',
        tags: 'Javascript, Web Development, Frontend',
        license: 'None',
      },
      {
        title: 'Learn React',
        description: 'Learn React in 60 minutes',
        category: 'Web Development',
        level: 9,
        prerequisite: 'Learn Javascript',
        tags: 'React, Web Development, Frontend',
        license: 'None',
      },
      {
        title: 'Learn NodeJS',
        description: 'Learn NodeJS in 70 minutes',
        category: 'Web Development',
        level: 9,
        prerequisite: 'Learn Javascript',
        tags: 'NodeJS, Web Development, Backend',
        license: 'None',
      },
      {
        title: 'Learn Express',
        description: 'Learn Express in 80 minutes',
        category: 'Web Development',
        level: 9,
        prerequisite: 'Learn NodeJS',
        tags: 'Express, Web Development, Backend',
        license: 'None',
      },
      {
        title: 'Learn Sequelize',
        description: 'Learn Sequelize in 90 minutes',
        category: 'Web Development',
        level: 9,
        prerequisite: 'Learn NodeJS',
        tags: 'Sequelize, Web Development, Backend',
        license: 'None',
      },
      {
        title: 'Learn PostgreSQL',
        description: 'Learn PostgreSQL in 100 minutes',
        category: 'Web Development',
        level: 9,
        prerequisite: 'Learn NodeJS',
        tags: 'PostgreSQL, Web Development, Backend',
        license: 'None',
      },
      {
        title: 'Learn MongoDB',
        description: 'Learn MongoDB in 110 minutes',
        category: 'Web Development',
        level: 9,
        prerequisite: 'Learn NodeJS',
        tags: 'MongoDB, Web Development, Backend',
        license: 'None',
      },
      {
        title: 'Learn Docker',
        description: 'Learn Docker in 120 minutes',
        category: 'Web Development',
        level: 9,
        prerequisite: 'Learn NodeJS',
        tags: 'Docker, Web Development, DevOps',
        license: 'None',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('LearningPackage', null, {});
  },
};