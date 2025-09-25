// src/App.jsx
import React, { useState, useEffect } from 'react';
import './index.css';
import MealList from './compontents/organisms/MealList';
import Navbar from './compontents/organisms/Navbar';
import MealCard from './compontents/molecules/MealCard';
import MyRecipes from './compontents/organisms/MyRecipes';
import Profile from './compontents/organisms/Profile';
import Footer from './compontents/organisms/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (currentPage === 'favorites') {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const validFavorites = storedFavorites.filter((m) => m && m.idMeal); // filtra card vuote
      setFavoriteMeals(validFavorites);
    }
  }, [currentPage]);

  return (
    <div className="app-container">
      <Navbar onNavClick={handleNavClick} />

      <div className="main-content">
        {/* HOME */}
        {currentPage === 'home' && <MealList />}

        {/* PREFERITI */}
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

        {/* LE MIE RICETTE */}
        {currentPage === 'myRecipes' && <MyRecipes />}

        {/* PROFILO */}
        {currentPage === 'profile' && <Profile />}
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
