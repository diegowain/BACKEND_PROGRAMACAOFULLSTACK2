const { DataTypes } = require('sequelize');
const sequelize = require('../Rotas/conexao.js');

const Course = sequelize.define('Course', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Course;
