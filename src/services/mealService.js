// src/services/mealService.js

const API_URL = 'https://www.themealdb.com/api/json/v1/1/';

// Funzione per ottenere tutti i piatti
export const fetchMeals = async (meal = '') => {
  try {
    const response = await fetch(`${API_URL}search.php?s=${meal}`);
    
    // Verifica che la risposta sia ok
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.meals || []; // Restituisce i dati dei pasti
  } catch (error) {
    console.error('Errore nel recupero dei pasti:', error);
    return []; // Restituisce un array vuoto in caso di errore
  }
};
