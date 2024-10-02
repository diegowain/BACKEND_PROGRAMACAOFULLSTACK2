const express = require('express');
const { getAllStudents, createStudent } = require('../Controle/alunoCtrl.js');
const router = express.Router();

router.get('/', getAllStudents);
router.post('/', createStudent);

module.exports = router;
