// src/pages/Creditos.tsx
// src/pages/Creditos.tsx
import React from 'react';
import '../styles/global.css';

const Creditos: React.FC = () => {
  return (
    <div className='creditos-container'>
      <div className='creditos-content'>
        <h1>Projeto desenvolvido por :</h1>
          <p>Bruno Sérgio</p>
          <p>José André</p>
          <p>Luan Monteiro</p>
          <p>Pedro Henrique</p>
      </div>
    </div>
  );
};

export default Creditos;
