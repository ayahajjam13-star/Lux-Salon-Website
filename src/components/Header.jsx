import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">🌸 Beauté & Coiffure</div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#hero">Accueil</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Galerie</a></li>
          <li><a href="#appointment">Rendez-vous</a></li>
        </ul>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </header>
  );
}

export default Header;