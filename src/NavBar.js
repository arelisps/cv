// src/NavBar.js
import React from 'react';
import './css/NavBar.css'; // Para darle estilo a la barra

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">Arelis Picado Solano</div>
      <ul className="navbar__links">
        <li><a href="#about">About</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
