// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">LUXÉ</div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#booking" className="nav-cta">Book Now</a>
        </div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
        <a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a>
        <a href="#booking" onClick={() => setIsOpen(false)} className="mobile-cta">Book Now</a>
      </div>
    </nav>
  );
}

export default Navbar;