// src/components/organisms/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} Meal App. Tutti i diritti riservati.</p>
      <div className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Termini di servizio</a>
        <a href="mailto:mealapp@gmail.com">Contatti</a> {/* Link mailto */}
      </div>
    </footer>
  );
};

export default Footer;
