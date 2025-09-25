// src/components/molecules/MealCard.jsx
import React, { useState, useEffect } from 'react';
import './MealCard.css';
import { translateCategory, translateMeal } from '../../utils/translation';

const MealCard = ({ meal }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Controlla se la ricetta è già nei preferiti all'avvio
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const exists = favorites.some((m) => m.idMeal === meal.idMeal);
    setIsFavorite(exists);
  }, [meal.idMeal]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let updatedFavorites;

    if (isFavorite) {
      // Rimuovi dai preferiti
      updatedFavorites = favorites.filter((m) => m.idMeal !== meal.idMeal);
      setIsFavorite(false);
    } else {
      // Aggiungi la ricetta completa ai preferiti
      updatedFavorites = [...favorites, meal];
      setIsFavorite(true);
    }

    // Salva aggiornamento in localStorage
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="meal-card">
      <h3>{translateMeal(meal.strMeal)}</h3>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{translateCategory(meal.strCategory)}</p>
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
