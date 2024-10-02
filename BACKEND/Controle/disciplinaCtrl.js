const Discipline = require('../Modelo/disciplina.js');
const Course = require('../Modelo/course.js');

exports.getAllDisciplines = async (req, res) => {
  const disciplines = await Discipline.findAll({ include: Course });
  res.json(disciplines);
};

exports.createDiscipline = async (req, res) => {
  const { name, courses } = req.body;

  // Criar a disciplina
  const newDiscipline = await Discipline.create({ name });

  // Associar os cursos à disciplina (se houver)
  if (courses && courses.length > 0) {
    const courseInstances = await Course.findAll({ where: { id: courses } });
    await newDiscipline.addCourses(courseInstances);
  }

  res.json(newDiscipline);
};
