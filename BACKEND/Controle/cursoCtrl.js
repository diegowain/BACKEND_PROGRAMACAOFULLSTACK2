const Course = require('../Modelo/course.js');
const Discipline = require('../Modelo/disciplina.js');
exports.getAllCourses = async (req, res) => {
  const courses = await Course.findAll();
  res.json(courses);
};

exports.createCourse = async (req, res) => {
  const { name } = req.body;
  const newCourse = await Course.create({ name });
  if (Discipline && Discipline.length > 0) {
    const disciplineInstances = await Discipline.findAll({ where: { id: Discipline } });
    await newCourse.addDisciplines(disciplineInstances);

  res.json(newCourse);
}};
