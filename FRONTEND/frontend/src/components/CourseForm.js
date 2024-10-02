import React, { useState } from 'react';
import axios from 'axios';

const CourseForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3060/courses', { name })
      .then(() => {
        alert('Curso cadastrado com sucesso!');
        setName(''); // Limpa o campo após o cadastro
      })
      .catch((error) => {
        console.error('Erro ao cadastrar curso:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome do Curso:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <button type="submit">Cadastrar Curso</button>
    </form>
  );
};

export default CourseForm;
