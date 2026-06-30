import React from 'react';

function Appointment() {
  return (
    <section id="appointment" className="appointment">
      <div className="container">
        <h2>Prenez rendez-vous</h2>
        <p>Offrez à vos cheveux les soins qu'ils méritent.</p>
        <form className="appointment-form">
          <input type="text" placeholder="Votre nom" />
          <input type="email" placeholder="Votre email" />
          <input type="tel" placeholder="Votre téléphone" />
          <button type="submit" className="btn">Réserver</button>
        </form>
      </div>
    </section>
  );
}

export default Appointment;