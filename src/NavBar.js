import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para navegación interna
import './css/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Cambiar el estado para abrir o cerrar el menú
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          Arelis Picado Solano
        </Link>
      </div>

      {/* Botón hamburguesa solo visible en pantallas pequeñas */}
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      {/* Enlaces de navegación, que se muestran solo cuando el menú está abierto */}
      <div className={`navbar-right ${isMenuOpen ? 'show' : ''}`}>
        <a href="/about">About</a>
        <a href="/resume">Resume</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
