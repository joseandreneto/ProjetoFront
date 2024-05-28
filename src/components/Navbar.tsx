import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`navbar ${theme}`}>
      <Link to="/">Home</Link>
      <Link to="/contador">Contador</Link>
      <Link to="/api">API</Link>
      <Link to="/creditos">Créditos</Link>
      <button onClick={toggleTheme}>
        Modo {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </nav>
  );
};

export default Navbar;