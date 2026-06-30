// components/Services.jsx
import React from 'react';
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.jpg';
import service4 from '../assets/service4.jpg';

const services = [
  { 
    name: 'Lissage & Brushing', 
    desc: 'Smooth, sleek, and perfectly styled hair with lasting shine.', 
    img: service1 
  },
  { 
    name: 'Soin Capillaire', 
    desc: 'Deep conditioning treatments to restore and nourish your hair.', 
    img: service2 
  },
  { 
    name: 'Coloration Professionnelle', 
    desc: 'Custom color blends for a radiant, natural finish.', 
    img: service3 
  },
  { 
    name: 'Coupe Femme', 
    desc: 'Precision cuts tailored to your face shape and style.', 
    img: service4 
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <span className="section-badge">— What We Offer</span>
          <h2>Signature <span className="highlight">Services</span></h2>
          <p>Each treatment is crafted with precision, passion, and the finest products.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card reveal reveal-1">
              <img src={service.img} alt={service.name} />
              <h3>{service.name}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;