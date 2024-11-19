// src/App.js
import React from 'react';
import NavBar from './NavBar';
import Resume from './CV/cv';
import ContactMe from './contact_me';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="about">
        <h2>About</h2>
        <p>This is about me.</p>
      </section>
      <Resume /> {/* Agrega el componente Resume */}
      <ContactMe /> {/* Agrega el componente Resume */}
      <section id="projects">
        <h2>Projects</h2>
        <p>Details about my projects.</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Get in touch with me.</p>
      </section>
    </div>
  );
}

export default App;
