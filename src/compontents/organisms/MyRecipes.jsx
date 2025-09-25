import React, { useState, useEffect } from 'react';
import './MyRecipes.css';

const MyRecipes = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null);
  const [recipes, setRecipes] = useState([]);

  // Carica le ricette salvate all’avvio
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('myRecipes')) || [];
    setRecipes(savedRecipes);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients,
      instructions,
      image: image ? URL.createObjectURL(image) : null
    };
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);
    localStorage.setItem('myRecipes', JSON.stringify(updatedRecipes));

    setTitle('');
    setIngredients('');
    setInstructions('');
    setImage(null);
  };

  const handleDelete = (id) => {
    const updatedRecipes = recipes.filter(r => r.id !== id);
    setRecipes(updatedRecipes);
    localStorage.setItem('myRecipes', JSON.stringify(updatedRecipes));
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

      <div className="created-recipes">
        {recipes.map((r) => (
          <div className="recipe-card" key={r.id}>
            {r.image && <img src={r.image} alt={r.title} />}
            <h3>{r.title}</h3>
            <p><strong>Ingredienti:</strong> {r.ingredients}</p>
            <p><strong>Preparazione:</strong> {r.instructions}</p>
            <button
              className="delete-btn"
              onClick={() => handleDelete(r.id)}
            >
              Elimina
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRecipes;
