// src/components/organisms/MyRecipes.jsx
import React, { useState } from 'react';
import './MyRecipes.css';

const MyRecipes = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null);
  const [recipes, setRecipes] = useState([]); // Lista di ricette create

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients,
      instructions,
      image: image ? URL.createObjectURL(image) : null
    };
    setRecipes([...recipes, newRecipe]);

    // Resetta i campi
    setTitle('');
    setIngredients('');
    setInstructions('');
    setImage(null);
  };

  return (
    <div className="my-recipes-container">
      <p>Qui potrai creare le tue ricette</p>

      <form className="my-recipes-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titolo della ricetta"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Ingredienti"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <textarea
          placeholder="Preparazione"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Crea ricetta</button>
      </form>

      {/* Lista delle ricette create */}
      <div className="created-recipes">
        {recipes.map((r) => (
          <div className="recipe-card" key={r.id}>
            {r.image && <img src={r.image} alt={r.title} />}
            <h3>{r.title}</h3>
            <p><strong>Ingredienti:</strong> {r.ingredients}</p>
            <p><strong>Preparazione:</strong> {r.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRecipes;
