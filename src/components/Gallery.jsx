// components/Gallery.jsx
import React, { useState } from 'react';
import before1 from '../assets/before1.jpg';
import after1 from '../assets/after1.jpg';
import before2 from '../assets/before2.jpg';
import after2 from '../assets/after2.jpg';
import before3 from '../assets/before3.jpg';
import after3 from '../assets/after3.jpg';

const beforeAfter = [
  { before: before1, after: after1 },
  { before: before2, after: after2 },
  { before: before3, after: after3 },
];

function Gallery() {
  const [active, setActive] = useState(0);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery-header">
          <span className="section-badge">— Transformations</span>
          <h2>Before & <span className="highlight">After</span></h2>
          <p>Real results from real clients. See the difference.</p>
        </div>
        <div className="gallery-grid">
          {beforeAfter.map((item, i) => (
            <div 
              key={i} 
              className={`gallery-item ${active === i ? 'active' : ''}`}
              onMouseEnter={() => setActive(i)}
            >
              <div className="gallery-before">
                <span>Before</span>
                <img src={item.before} alt={`Before ${i+1}`} />
              </div>
              <div className="gallery-after">
                <span>After</span>
                <img src={item.after} alt={`After ${i+1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;