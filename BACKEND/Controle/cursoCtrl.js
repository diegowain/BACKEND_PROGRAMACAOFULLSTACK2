const Course = require('../Modelo/course.js');

exports.getAllCourses = async (req, res) => {
  const courses = await Course.findAll();
  res.json(courses);
};

exports.createCourse = async (req, res) => {
  const { name } = req.body;
  const newCourse = await Course.create({ name });
  res.json(newCourse);
};
