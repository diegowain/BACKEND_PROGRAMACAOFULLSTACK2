const { Sequelize } = require('sequelize');

// Configuração do banco de dados
const sequelize = new Sequelize('full', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
