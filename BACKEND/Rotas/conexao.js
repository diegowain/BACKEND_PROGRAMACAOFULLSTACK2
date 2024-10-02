const { Sequelize } = require('sequelize');

// Configuração do banco de dados
const sequelize = new Sequelize('ful', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
