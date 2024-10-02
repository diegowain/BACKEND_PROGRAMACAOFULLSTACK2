const { DataTypes } = require('sequelize');
const sequelize = require('../Rotas/conexao.js');
const Course = require('./course.js');

const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Student.belongsTo(Course, { onDelete: 'CASCADE' }); // Relacionamento um para muitos
Course.hasMany(Student);

module.exports = Student;
