// components/Footer.jsx
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>LUXÉ</h3>
            <p>Elegance. Precision. Luxury.</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>+212 6 88 47 16 67</p>
            <p>contact@luxe.com</p>
            <p>Al Hoceima, Morocco</p>
          </div>
          <div>
            <h4>Follow</h4>
            <div className="social-links">
              <a href="#">IG</a>
              <a href="#">FB</a>
              <a href="#">YT</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Luxé. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;