// components/Testimonials.jsx
import React from 'react';
import testimonial1 from '../assets/testimonial1.jpg';
import testimonial2 from '../assets/testimonial2.jpg';
import testimonial3 from '../assets/testimonial3.jpg';

const testimonials = [
  { name: 'Sophie Laurent', role: 'Regular Client', text: 'Luxé is my sanctuary. The attention to detail and the quality of service is unmatched. I always leave feeling like royalty.', img: testimonial1 },
  { name: 'Emma Dubois', role: 'Bridal Client', text: 'My wedding hair and makeup were perfection. They listened to what I wanted and delivered beyond my expectations.', img: testimonial2 },
  { name: 'Isabelle Moreau', role: 'New Client', text: 'I was nervous about trying a new salon, but the team made me feel so welcome. The results were stunning!', img: testimonial3 },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-badge">— Testimonials</span>
          <h2>What Our <span className="highlight">Clients Say</span></h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card reveal reveal-2">
              <div className="quote">"</div>
              <p>{t.text}</p>
              <div className="testimonial-footer">
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
                <div className="stars">★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;