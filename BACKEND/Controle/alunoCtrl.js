const Student = require('../Modelo/aluno.js');
const Course = require('../Modelo/course.js');

exports.getAllStudents = async (req, res) => {
  const students = await Student.findAll({ include: Course });
  res.json(students);
};

exports.createStudent = async (req, res) => {
  const { name, email, courseId } = req.body;
  const newStudent = await Student.create({ name, email, CourseId: courseId });
  res.json(newStudent);
};
