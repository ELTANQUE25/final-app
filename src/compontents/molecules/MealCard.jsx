// src/components/molecules/MealCard.jsx
import React, { useState, useEffect } from 'react';
import './MealCard.css';

const MealCard = ({ meal }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Carica lo stato dei preferiti da localStorage
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(meal.idMeal));
  }, [meal.idMeal]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let updatedFavorites;
    if (favorites.includes(meal.idMeal)) {
      // Rimuovi dai preferiti
      updatedFavorites = favorites.filter((id) => id !== meal.idMeal);
      setIsFavorite(false);
    } else {
      // Aggiungi ai preferiti
      updatedFavorites = [...favorites, meal.idMeal];
      setIsFavorite(true);
    }
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="meal-card">
      <h3>{meal.strMeal}</h3>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strCategory}</p>
      {meal.strSource && (
        <a href={meal.strSource} target="_blank" rel="noopener noreferrer">
          Scopri la ricetta
        </a>
      )}

      {/* Pulsante preferito */}
      <button
        className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
        onClick={toggleFavorite}
      >
        {isFavorite ? '❤️ Preferito' : '🤍'}
      </button>
    </div>
  );
};

export default MealCard;
