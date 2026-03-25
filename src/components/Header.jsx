import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>Seeflix</h1>
        </div>
        <ul className="navbar-links">
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/media">Media</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">Discover Your Next Favorite Movie or Show</h2>
          <p className="hero-subtitle">
            Explore the trending movies and top-rated TV shows all in one place.
          </p>
          <button className="hero-cta">Explore Now</button>
        </div>
      </section>
    </header>
  );
}

export default Header;

