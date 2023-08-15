const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('admin', 'caramel', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
