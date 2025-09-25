import React, { useState, useEffect } from 'react';
import './MyRecipes.css';

const MyRecipes = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [editId, setEditId] = useState(null); // id della ricetta in modifica

  // Carica le ricette salvate all’avvio
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('myRecipes')) || [];
    setRecipes(savedRecipes);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      // Modifica ricetta esistente
      const updatedRecipes = recipes.map(r => {
        if (r.id === editId) {
          return {
            ...r,
            title,
            ingredients,
            instructions,
            image: image ? URL.createObjectURL(image) : r.image
          };
        }
        return r;
      });
      setRecipes(updatedRecipes);
      localStorage.setItem('myRecipes', JSON.stringify(updatedRecipes));
      setEditId(null);
    } else {
      // Crea nuova ricetta
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
    }

    // Resetta i campi
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

  const handleEdit = (recipe) => {
    setTitle(recipe.title);
    setIngredients(recipe.ingredients);
    setInstructions(recipe.instructions);
    setImage(null);
    setEditId(recipe.id);
  };

  return (
    <div className="my-recipes-container">
      <p className='Ricette'>Qui potrai creare e modificare le tue ricette</p>

      {/* Form verticale centrata */}
      <form className="my-recipes-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Titolo della ricetta" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Ingredienti" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
        <textarea placeholder="Preparazione" value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
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
