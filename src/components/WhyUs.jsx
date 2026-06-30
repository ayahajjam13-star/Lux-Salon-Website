// components/WhyUs.jsx
import React from 'react';
import './WhyUs.css';

const reasons = [
  { icon: '🏆', title: 'Award-Winning', desc: 'Recognized for excellence in luxury beauty services.' },
  { icon: '🌱', title: 'Clean Products', desc: 'Only premium, sustainable, and cruelty-free products.' },
  { icon: '👑', title: 'Personalized', desc: 'Tailored treatments designed just for you.' },
  { icon: '✨', title: 'Luxury Experience', desc: 'From the moment you enter, you are our priority.' },
];

function WhyUs() {
  return (
    <section className="why-us">
      <div className="container">
        <div className="why-grid">
          <div className="why-content">
            <span className="section-badge">— Why Choose Us</span>
            <h2>Where Every Detail <span className="highlight">Matters</span></h2>
            <p>
              We believe beauty is an art form. From the ambiance to the final touch,
              we create an experience that leaves you feeling radiant and rejuvenated.
            </p>
            <button className="btn-secondary">Our Story</button>
          </div>
          <div className="why-cards">
            {reasons.map((r, i) => (
              <div key={i} className="why-card">
                <span>{r.icon}</span>
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;