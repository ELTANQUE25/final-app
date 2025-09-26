import React, { useState, useEffect } from 'react';
import './MyRecipes.css';

const MyRecipes = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null);
  const [difficulty, setDifficulty] = useState('Facile'); // Difficoltà di default
  const [recipes, setRecipes] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('myRecipes')) || [];
    setRecipes(savedRecipes);
  }, []);

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
            difficulty
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
        difficulty
      };
      const updatedRecipes = [...recipes, newRecipe];
      setRecipes(updatedRecipes);
      localStorage.setItem('myRecipes', JSON.stringify(updatedRecipes));
    }

    setTitle('');
    setIngredients('');
    setInstructions('');
    setImage(null);
    setDifficulty('Facile'); // Reset difficoltà
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

          <label htmlFor="difficulty">Difficoltà</label>
          <select
    value={difficulty}
    onChange={(e) => setDifficulty(e.target.value)}
    required
  >
    <option  value="" disabled>Seleziona la difficoltà</option> {/* Placeholder */}
    <option value="Facile">Facile 🍳</option>
    <option value="Media">Media 🍳🍳</option>
    <option value="Difficile">Difficile 🍳🍳🍳</option>
  </select>
                <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
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
            <p><strong>Difficoltà:</strong> {r.difficulty}</p> {/* Mostra la difficoltà */}
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