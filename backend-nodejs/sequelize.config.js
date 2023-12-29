const { Sequelize } = require('sequelize');

module.exports = new Sequelize('LearningFact', 'UserLearningFact', 'LaerningPackage', 'UserLearningPackage', 'root', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  define: {
    timestamps: false,
  },
});