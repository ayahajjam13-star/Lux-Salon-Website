// components/Hero.jsx
import React from 'react';
import heroImage from '../assets/hero.jpg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">— Since 2016</div>
          <h1>Where Beauty<br /><span>Meets Art</span></h1>
          <p>
            Experience the luxury of personalized beauty treatments
            in an elegant, serene atmosphere crafted just for you.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Discover</button>
            <button className="btn-secondary">View Services</button>
          </div>
          <div className="hero-stats">
            <div>
              <span>10+</span>
              <p>Years Excellence</p>
            </div>
            <div>
              <span>5k+</span>
              <p>Happy Clients</p>
            </div>
            <div>
              <span>50+</span>
              <p>Expert Stylists</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Luxury beauty salon" />
          <div className="hero-floating-card">
            <p>⭐ 4.9</p>
            <span>Premium Service</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;