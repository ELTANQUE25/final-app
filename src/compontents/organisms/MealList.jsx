// src/components/organisms/MealList.jsx
import React, { useState, useEffect } from 'react';
import MealCard from '../molecules/MealCard';
import { fetchMeals } from '../../services/mealService';

const MealList = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMeals = async (meal = '') => {
    setLoading(true);
    const mealsData = await fetchMeals(meal);
    console.log('Dati dei pasti:', mealsData);  // Verifica che i dati vengano ricevuti
    setMeals(mealsData);
    setLoading(false);
  };

  useEffect(() => {
    searchMeals();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    searchMeals(searchTerm);
  };

  return (
    <div>
      <h2>I nostri piatti</h2>

      {/* Barra di ricerca */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Cerca un piatto..."
      />
      <button onClick={handleSearchSubmit}>Cerca</button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {meals.length === 0 ? (
            <p>Nessun piatto trovato.</p>
          ) : (
            meals.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default MealList;
