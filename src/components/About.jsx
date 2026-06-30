import React from 'react';
import aboutImage from '../assets/about.jpg';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="Notre salon" />
        </div>
        <div className="about-text">
          <h2>À propos de nous</h2>
          <p>
            Votre beauté, notre passion. Notre salon de coiffure féminin vous accueille
            dans un espace chaleureux et moderne. Nous mettons notre expertise à votre
            service pour vous offrir des prestations personnalisées et un résultat à la
            hauteur de vos attentes.
          </p>
          <button className="btn">En savoir plus</button>
        </div>
      </div>
    </section>
  );
}

export default About;