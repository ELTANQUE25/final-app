// src/components/organisms/MyRecipes.jsx
import React, { useState, useEffect } from 'react';
import './MyRecipes.css';

const MyRecipes = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null);
  const [difficulty, setDifficulty] = useState('Seleziona la difficolta'); // Difficoltà di default
  const [prepTime, setPrepTime] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [editId, setEditId] = useState(null);

  // Carica le ricette salvate dal localStorage
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('myRecipes')) || [];
    setRecipes(savedRecipes);
  }, []);

  // Funzione per salvare la ricetta
  const handleSubmit = (e) => {
    e.preventDefault();

    let imageUrl = null;
    if (image) {
      const imageRef = URL.createObjectURL(image);
      imageUrl = imageRef;
    }

    if (editId) {
      const updatedRecipes = recipes.map(r => {
        if (r.id === editId) {
          return {
            ...r,
            title,
            ingredients,
            instructions,
            image: imageUrl,
            difficulty,
            prepTime
          };
        }
        return r;
      });
      setRecipes(updatedRecipes);
      localStorage.setItem('myRecipes', JSON.stringify(updatedRecipes));
      setEditId(null);
    } else {
      const newRecipe = {
        id: Date.now(),
        title,
        ingredients,
        instructions,
        image: imageUrl,
        difficulty,
        prepTime
      };
      const updatedRecipes = [...recipes, newRecipe];
      setRecipes(updatedRecipes);
      localStorage.setItem('myRecipes', JSON.stringify(updatedRecipes));
    }

    // Reset dei campi
    setTitle('');
    setIngredients('');
    setInstructions('');
    setImage(null);
    setDifficulty('Facile');
    setPrepTime('');
  };

  // Funzione per modificare una ricetta
  const handleEdit = (recipe) => {
    setEditId(recipe.id);
    setTitle(recipe.title);
    setIngredients(recipe.ingredients);
    setInstructions(recipe.instructions);
    setImage(recipe.image ? recipe.image : null);
    setDifficulty(recipe.difficulty);
    setPrepTime(recipe.prepTime);
  };

  // Funzione per eliminare una ricetta
  const handleDelete = (id) => {
    const updatedRecipes = recipes.filter(r => r.id !== id);
    setRecipes(updatedRecipes);
    localStorage.setItem('myRecipes', JSON.stringify(updatedRecipes));
  };

  return (
    <div className="my-recipes-container">
      <p>Qui potrai creare e modificare le tue ricette</p>

      {/* Form di creazione ricetta */}
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
        
        {/* Selezione difficoltà */}
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          required
        >
          <option value="" disabled>Seleziona la difficoltà</option>
          <option value="Facile">Facile 🍳</option>
          <option value="Media">Media 🍳🍳</option>
          <option value="Difficile">Difficile 🍳🍳🍳</option>
        </select>

        {/* Tempo di preparazione */}
        <input
          type="number"
          placeholder="Tempo di preparazione (minuti)"
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
          required
        />

        <button type="submit">{editId ? 'Salva modifiche' : 'Crea ricetta'}</button>
      </form>

      {/* Griglia delle ricette create */}
      <div className="created-recipes">
        {recipes.map((r) => (
          <div className="recipe-card" key={r.id}>
            {r.image && <img src={r.image} alt={r.title} />}
            <h3>{r.title}</h3>
            <p><strong>Ingredienti:</strong> {r.ingredients}</p>
            <p><strong>Preparazione:</strong> {r.instructions}</p>
            <p><strong>Difficoltà:</strong> {r.difficulty}</p>
            <div className="card-buttons">
              <button className="delete-btn" onClick={() => handleDelete(r.id)}>Elimina</button>
              <button className="edit-btn" onClick={() => handleEdit(r)}>Modifica</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRecipes;
