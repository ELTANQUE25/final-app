// src/App.jsx
import React, { useState } from 'react';
import './index.css';
import logo from './assets/logo.png';
import MealList from './compontents/organisms/MealList';
import Navbar from './compontents/organisms/Navbar';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app-container">
      {/* Header principale */}
      <header className="app-header-horizontal">
        <div className="header-left">
          {/* <img src={logo} alt="Logo" className="logo" /> */}

        </div>
        <Navbar onNavClick={handleNavClick} />
      </header>

      {/* Contenuto principale */}
      <div className="main-content">
        {currentPage === 'home' && <MealList />}
        {currentPage === 'favorites' && <p>Qui vedrai i tuoi preferiti</p>}
        {currentPage === 'myRecipes' && <p>Qui vedrai le tue ricette</p>}
        {currentPage === 'profile' && <p>Qui puoi modificare il tuo profilo</p>}
      </div>
    </div>
  );
};

export default App;
