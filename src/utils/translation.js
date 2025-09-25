// Oggetto di traduzione per categorie e piatti comuni
const translationMap = {
  categories: {
    "Beef": "Manzo",
    "Chicken": "Pollo",
    "Dessert": "Dolce",
    "Pasta": "Pasta",
    "Seafood": "Pesce",
    "Vegetarian": "Vegetariano",
    "Vegan": "Vegano",
    "Miscellaneous": "Altro",
    "Side":"Contorno",
    "Lamb":"Agnello",
    "Pork":"Maiale",
  },
  meals: {
    "Beef Wellington": "Wellington di manzo",
    "Chicken Alfredo": "Pollo Alfredo",
    // aggiungi altri piatti se vuoi
  }
};

// Funzione per tradurre una categoria
export const translateCategory = (category) => {
  return translationMap.categories[category] || category;
};

// Funzione per tradurre un nome di piatto
export const translateMeal = (mealName) => {
  return translationMap.meals[mealName] || mealName;
};
