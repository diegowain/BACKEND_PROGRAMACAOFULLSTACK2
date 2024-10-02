const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./Rotas/conexao.js');
const courseRoutes = require('./Rotas/courseRoutes.js');
const studentRoutes = require('./Rotas/studentRoutes.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/courses', courseRoutes);
app.use('/students', studentRoutes);

sequelize.sync().then(() => {
  app.listen(3060, () => {
    console.log('Servidor rodando na porta 3060');
  });
});
