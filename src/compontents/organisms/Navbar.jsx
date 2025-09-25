// src/components/organisms/Navbar.jsx
import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'; // Import del logo

const Navbar = ({ onNavClick }) => {
  return (
    <nav className="navbar">
      {/* Logo a sinistra */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Link della navbar */}
      <ul className="navbar-links">
        <li onClick={() => onNavClick('home')}>Home</li>
        <li onClick={() => onNavClick('favorites')}>Preferiti</li>
        <li onClick={() => onNavClick('myRecipes')}>Le mie ricette</li>
        <li onClick={() => onNavClick('profile')}>Profilo</li>
      </ul>
    </nav>
  );
};

export default Navbar;
