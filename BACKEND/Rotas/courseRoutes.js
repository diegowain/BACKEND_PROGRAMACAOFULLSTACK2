const express = require('express');
const { getAllCourses, createCourse } = require('../Controle/cursoCtrl.js');
const router = express.Router();

router.get('/', getAllCourses);
router.post('/', createCourse);

module.exports = router;
