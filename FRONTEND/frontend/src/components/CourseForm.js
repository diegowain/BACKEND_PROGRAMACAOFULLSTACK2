import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseForm = () => {
  const [name, setName] = useState('');
  const [disciplines, setDisciplines] = useState([]);
  const [selectedDisciplines, setSelectedDisciplines] = useState([]);

  useEffect(() => {
    // Buscar as disciplinas disponíveis
    axios.get('http://localhost:3060/disciplines')
      .then((res) => setDisciplines(res.data))
      .catch((error) => console.error('Erro ao buscar disciplinas:', error));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3060/courses', { name, disciplines: selectedDisciplines })
      .then(() => {
        alert('Curso cadastrado com sucesso!');
        setName(''); 
        setSelectedDisciplines([]);// Limpa o campo após o cadastro
      })
      .catch((error) => {
        console.error('Erro ao cadastrar curso:', error);
      });
  };

  const handleDisciplineSelect = (e) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedDisciplines(value);
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
      <div>
        <label>Disciplinas:</label>
        <select
          multiple
          value={selectedDisciplines}
          onChange={handleDisciplineSelect}
          required
        >
          {disciplines.map((discipline) => (
            <option key={discipline.id} value={discipline.id}>{discipline.name}</option>
          ))}
        </select>
      </div>
      <button type="submit">Cadastrar Curso</button>
    </form>
  );
};

export default CourseForm;
