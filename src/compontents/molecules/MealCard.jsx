// src/components/molecules/MealCard.jsx
import React from 'react';

const MealCard = ({ meal }) => {
  return (
    <div>
      <h3>{meal.strMeal}</h3>
      <img src={meal.strMealThumb} alt={meal.strMeal} width="200" />
      <p>{meal.strCategory}</p>
      <a href={meal.strSource} target="_blank" rel="noopener noreferrer">
        Recipe Source
      </a>
    </div>
  );
};

export default MealCard;
