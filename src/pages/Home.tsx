// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalculator, FaDatabase, FaInfoCircle } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <div>
      <div className="home-buttons">
        <Link to="/contador">
          <FaCalculator className="icon" />
          <span>Contador</span>
        </Link>
        <Link to="/api">
          <FaDatabase className="icon" />
          <span>API</span>
        </Link>
        <Link to="/creditos">
          <FaInfoCircle className="icon" />
          <span>Créditos</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
