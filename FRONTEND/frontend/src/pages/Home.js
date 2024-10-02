import React from 'react';
import CourseList from '../components/CourseList.js';
import StudentForm from '../components/StudentForm.js';
import CourseForm from '../components/CourseForm.js';
import DisciplineForm from '../components/DisciplineForm.js';
import '../styles/App.css'; // Importando o CSS

const Home = () => {
  return (
    <div className="container">
      <h1>Sistema de Cadastro de Alunos e Cursos</h1>
      <div className="flex-container">
      <div className="flex-item">
          <h2>Cadastrar Disciplina</h2>
          <DisciplineForm />
        </div>
        <div className="flex-item">
          <h2>Cadastrar Curso</h2>
          <CourseForm />
        </div>
        <div className="flex-item">
          <h2>Cadastrar Aluno</h2>
          <StudentForm />
        </div>
      </div>
      <hr />
      <div>
        
        <CourseList />
      </div>
    </div>
  );
};

export default Home;


