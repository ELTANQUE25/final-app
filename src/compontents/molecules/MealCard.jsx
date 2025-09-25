// src/components/molecules/MealCard.jsx
import React, { useState, useEffect } from 'react';
import './MealCard.css';
import { translateCategory, translateMeal } from '../../utils/translation';

const MealCard = ({ meal }) => {
  if (!meal || !meal.idMeal) return null; // evita card vuote

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const exists = favorites.some((m) => m.idMeal === meal.idMeal);
    setIsFavorite(exists);
  }, [meal.idMeal]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter((m) => m.idMeal !== meal.idMeal);
      setIsFavorite(false);
    } else {
      updatedFavorites = [...favorites, meal];
      setIsFavorite(true);
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="meal-card">
      <h3>{translateMeal(meal.strMeal)}</h3>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{translateCategory(meal.strCategory)}</p>

      {/* Contenitore per il link e il pulsante */}
      <div className="meal-card-actions">
        {meal.strSource && (
          <a href={meal.strSource} target="_blank" rel="noopener noreferrer">
            Scopri la ricetta
          </a>
        )}

        <button
          className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
          onClick={toggleFavorite}
        >
          {isFavorite ? '❤️ Preferito' : '🤍'}
        </button>
      </div>
    </div>
  );
};

export default MealCard;
