import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Seeflix</h3>
        </div>
        <div className="footer-nav">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/media" className="footer-link">Media</Link>
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2025 Seeflix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

