// src/App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contador from './pages/Contador';
import API from './pages/API';
import Creditos from './pages/Creditos';
import Navbar from './components/Navbar';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './styles/global.css';

const App: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contador" element={<Contador />} />
          <Route path="/api" element={<API />} />
          <Route path="/creditos" element={<Creditos />} />
        </Routes>
      </Router>
    </div>
  );
};

export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
