import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = ({ onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (page) => {
    onNavClick(page);
    setIsOpen(false); // chiude menu su mobile
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li onClick={() => handleClick('home')}>Home</li>
        <li onClick={() => handleClick('favorites')}>Preferiti</li>
        <li onClick={() => handleClick('myRecipes')}>Le mie ricette</li>
        <li onClick={() => handleClick('profile')}>Profilo</li>
      </div>

      {/* Hamburger per mobile */}
      <div className="hamburger" onClick={handleToggle}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
