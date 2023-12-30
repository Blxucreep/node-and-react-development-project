const { Sequelize } = require('sequelize');

module.exports = new Sequelize('Learning', 'LearningUser', 'root', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  define: {
    timestamps: false,
  },
});