const { DataTypes } = require('sequelize');
const sequelize = require('../Rotas/conexao.js');
// NÃO importe Course ainda, para evitar referências circulares
// Course será referenciado após a definição do modelo Discipline

const Discipline = sequelize.define('Discipline', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Exporta o modelo antes de criar as associações para evitar referência circular
module.exports = Discipline;

// Agora que Discipline foi exportado, podemos importar Course
const Course = require('./course.js');

// Defina a associação depois que ambos os modelos tiverem sido definidos
Discipline.belongsToMany(Course, { through: 'CourseDiscipline' });
Course.belongsToMany(Discipline, { through: 'CourseDiscipline' });

