'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('LearningFact', [
      {
        title: 'What is HTML?',
        fact: 'HTML stands for HyperText Markup Language. HTML is the standard markup language for describing the structure of web pages.',
        package_id: 1,
      },
      {
        title: 'When was HTML invented?',
        fact: 'HTML was invented by Tim Berners-Lee in 1990.',
        package_id: 1,
      },
      {
        title: 'What is CSS?',
        fact: 'CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media.',
        package_id: 2,
      },
      {
        title: 'When was CSS invented?',
        fact: 'CSS was invented by Håkon Wium Lie in 1994.',
        package_id: 2,
      },
      {
        title: 'What is Javascript?',
        fact: 'JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS. JavaScript can calculate, manipulate and validate data.',
        package_id: 3,
      },
      {
        title: 'When was Javascript invented?',
        fact: 'JavaScript was invented by Brendan Eich in 1995.',
        package_id: 3,
      },
      {
        title: 'What is React?',
        fact: 'React is a JavaScript library for building user interfaces. React is used to build single page applications. React allows us to create reusable UI components.',
        package_id: 4,
      },
      {
        title: 'When was React invented?',
        fact: 'React was invented by Jordan Walke in 2011.',
        package_id: 4,
      },
      {
        title: 'What is NodeJS?',
        fact: 'Node.js is an open source server environment. Node.js is free. Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.). Node.js uses JavaScript on the server. Node.js can generate dynamic page content.',
        package_id: 5,
      },
      {
        title: 'When was NodeJS invented?',
        fact: 'NodeJS was invented by Ryan Dahl in 2009.',
        package_id: 5,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('LearningFact', null, {});
  },
};