// src/components/organisms/MealList.jsx
import React, { useState, useEffect } from 'react';
import MealCard from '../molecules/MealCard';
import { fetchMeals } from '../../services/mealService';
import './MealList.css'; // Import del CSS

const MealList = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMeals = async (meal = '') => {
    setLoading(true);
    const mealsData = await fetchMeals(meal);
    setMeals(mealsData);
    setLoading(false);
  };

  useEffect(() => {
    searchMeals();
  }, []);

  return (
    <>
      <div className="search-container">
        <h2>Meal List</h2>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Cerca un piatto..."
        />
        <button onClick={() => searchMeals(searchTerm)}>Cerca</button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="meal-list">
          {meals && meals.length > 0
            ? meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
            : <p>Nessun piatto trovato.</p>
          }
        </div>
      )}
    </>
  );
};

export default MealList;
