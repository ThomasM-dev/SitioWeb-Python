import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logoNav.jpg" alt="Logo" className="logo-img" />
      </div>
      <div
        className={`menu-toggle ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Secciones a la derecha */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#downloads">Proyectos</a>
        </li>
        <li>
          <a href="#ideas">Descarga</a>
        </li>
        <li>
          <a href="#noticias">Noticias</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
