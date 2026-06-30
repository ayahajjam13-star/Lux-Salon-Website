// components/Booking.jsx
import React from 'react';
import './Booking.css';

function Booking() {
  return (
    <section className="booking" id="booking">
      <div className="container">
        <div className="booking-content">
          <span className="section-badge">— Book Your Moment</span>
          <h2>Reserve Your <span className="highlight">Experience</span></h2>
          <p>Step into elegance. Schedule your appointment and let our experts take care of the rest.</p>
          <form className="booking-form">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />
            <select>
              <option>Select Service</option>
              <option>Lissage & Brushing</option>
              <option>Soin Capillaire</option>
              <option>Coloration Professionnelle</option>
              <option>Coupe Femme</option>
            </select>
            <button type="submit" className="btn-primary">Book Now</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Booking;