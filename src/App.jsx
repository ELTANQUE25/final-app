// src/App.jsx
import React from 'react';
import './index.css';
import logo from './assets/logo.png';
import MealList from './compontents/organisms/MealList';

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <img src={logo} alt="Logo" className="logo" />
          <h1>Benvenuto in Meal App!</h1>
        </div>
      </header>

      {/* Contenitore principale centrato */}
      <div className="main-content">
        <MealList />
      </div>
    </div>
  );
};

export default App;
