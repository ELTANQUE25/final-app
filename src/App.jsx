// src/App.jsx
import React from 'react';
import logo from './assets/logo.png';
import MealList from './compontents/organisms/MealList';
import './index.css'; // Importa il file CSS globale

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <img 
          src="/assets/logo.png"  // Aggiungi il percorso del tuo logo
          alt="Logo"
          className="logo"
        />
        <h1>Benvenuto nella tua Meal App!</h1>
      </header>
      <MealList />
    </div>
  );
};

export default App;
