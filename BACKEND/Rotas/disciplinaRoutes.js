const express = require('express');
const { getAllDisciplines, createDiscipline } = require('../Controle/disciplinaCtrl.js');
const router = express.Router();

router.get('/', getAllDisciplines);
router.post('/', createDiscipline);

module.exports = router;
