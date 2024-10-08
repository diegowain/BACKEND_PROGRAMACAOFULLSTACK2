const { DataTypes } = require('sequelize');
const sequelize = require('../Rotas/conexao.js');
// NÃO importe Discipline ainda, para evitar referências circulares
// Discipline será referenciado após a definição do modelo Course

const Course = sequelize.define('Course', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Exporta o modelo antes de criar as associações para evitar referência circular
module.exports = Course;

// Agora que Course foi exportado, podemos importar Discipline
const Discipline = require('./disciplina.js');

// Defina a associação depois que ambos os modelos tiverem sido definidos
Course.belongsToMany(Discipline, { through: 'CourseDiscipline' });
Discipline.belongsToMany(Course, { through: 'CourseDiscipline' });

