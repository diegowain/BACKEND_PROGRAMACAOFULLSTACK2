import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [courseId, setCourseId] = useState('');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Buscar os cursos disponíveis
    axios.get('http://localhost:3060/courses')
      .then((res) => setCourses(res.data))
      .catch((error) => console.error('Erro ao buscar cursos:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3060/students', { name, email, courseId })
      .then(() => {
        alert('Aluno cadastrado com sucesso!');
        setName('');
        setEmail('');
        setCourseId('');
      })
      .catch((error) => {
        console.error('Erro ao cadastrar aluno:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome do Aluno:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Curso:</label>
        <select
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          required
        >
          <option value="">Selecione um curso</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>{course.name}</option>
          ))}
        </select>
      </div>
      <button type="submit">Cadastrar Aluno</button>
    </form>
  );
};

export default StudentForm;

