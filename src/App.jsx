// src/App.jsx
import React, { useState, useEffect } from 'react';
import './index.css';
import MealList from './compontents/organisms/MealList';
import Navbar from './compontents/organisms/Navbar';
import MealCard from './compontents/molecules/MealCard'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  // Carica i preferiti da localStorage ogni volta che si entra nella pagina "favorites"
  useEffect(() => {
    if (currentPage === 'favorites') {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavoriteMeals(storedFavorites);
    }
  }, [currentPage]);

  return (
    <div className="app-container">
      <Navbar onNavClick={handleNavClick} />

      <div className="main-content">
        {currentPage === 'home' && <MealList />}

        {currentPage === 'favorites' && (
          <>
            {favoriteMeals.length === 0 ? (
              <p>Non hai ancora aggiunto nessuna ricetta ai preferiti.</p>
            ) : (
              <div className="meal-list">
                {favoriteMeals.map((meal) => (
                  <MealCard key={meal.idMeal} meal={meal} />
                ))}
              </div>
            )}
          </>
        )}

        {currentPage === 'myRecipes' && <p>Qui vedrai le tue ricette</p>}
        {currentPage === 'profile' && <p>Qui puoi modificare il tuo profilo</p>}
      </div>
    </div>
  );
};

export default App;
