import React from "react";
import { NavLink } from "react-router-dom";

export function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav class="navbar">
        <div class="navbar-container">
          <a href="#" class="brand-logo">SpeedRent</a>
          <button class="navbar-toggler">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse">
            <div class="navbar-nav">
              <div class="nav-item"><a href="/">Accueil</a></div>
              <div class="nav-item"><a href="/services">Services</a></div>
              <div class="nav-item"><a href="/produits">Produits</a></div>
              <div class="nav-item"><a href="/contacts">Contact</a></div>
            </div>
            <div class="navbar-nav navbar-right">
              <div class="nav-item"><a href="/register">Se connecter/S'inscrire</a></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}