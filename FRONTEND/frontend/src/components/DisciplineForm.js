import React, { useState } from 'react';
import axios from 'axios';

const DisciplineForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3060/disciplines', { name })
      .then(() => {
        alert('Disciplina cadastrada com sucesso!');
        setName('');
      })
      .catch((error) => {
        console.error('Erro ao cadastrar disciplina:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome da Disciplina:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <button type="submit">Cadastrar Disciplina</button>
    </form>
  );
};

export default DisciplineForm;
