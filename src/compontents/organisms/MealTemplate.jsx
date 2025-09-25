import React from 'react';
import MealList from './MealList';

const MealTemplate = () => {
  return (
    <div>
      <header>
        <h1>Welcome to the Meal Finder</h1>
      </header>
      <main>
        <MealList />
      </main>
    </div>
  );
};

export default MealTemplate;
