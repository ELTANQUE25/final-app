// src/components/organisms/Profile.jsx
import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Carica i dati salvati all’avvio
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (savedProfile) {
      setName(savedProfile.name);
      setEmail(savedProfile.email);
      setPassword(savedProfile.password);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const profileData = { name, email, password };
    localStorage.setItem('userProfile', JSON.stringify(profileData));
    alert('Profilo salvato con successo!');
  };

  return (
    <div className="profile-container">
      <h2>Il tuo Profilo</h2>
      <p>Compila la form per registrarti o aggiornare i tuoi dati</p>

      <form className="profile-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Salva Profilo</button>
      </form>
    </div>
  );
};

export default Profile;
