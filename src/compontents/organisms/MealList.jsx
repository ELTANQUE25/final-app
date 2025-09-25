// src/components/organisms/MealList.jsx
import React, { useState, useEffect } from 'react';
import MealCard from '../molecules/MealCard';
import { fetchMeals } from '../../services/mealService';
import './MealList.css';

const MealList = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const mealsPerPage = 8;

  useEffect(() => {
    searchMeals();
  }, []);

  const searchMeals = async (meal = '') => {
    setLoading(true);
    const mealsData = await fetchMeals(meal);
    setMeals(mealsData);
    setCurrentPage(1);
    setLoading(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    searchMeals(searchTerm);
  };

  // Paginazione
  const indexOfLastMeal = currentPage * mealsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
  const currentMeals = meals.slice(indexOfFirstMeal, indexOfLastMeal);
  const totalPages = Math.ceil(meals.length / mealsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className="search-container">
        <h2>Lista piatti</h2>

        {/* Input e button affiancati */}
        <div className="search-box">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Cerca un piatto..."
          />
          <button onClick={handleSearchSubmit}>Cerca</button>
        </div>

        {/* Paginazione subito sotto input + button */}
        {totalPages > 1 && (
          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>
              ←
            </button>
            <span>{currentPage} / {totalPages}</span>
            <button onClick={nextPage} disabled={currentPage === totalPages}>
              →
            </button>
          </div>
        )}
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="meal-list">
          {currentMeals.length === 0 ? (
            <p>Nessun piatto trovato.</p>
          ) : (
            currentMeals.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default MealList;
