import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logoImg from '../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" onClick={closeMenu}>
          {/* Logo ki height CSS se manage hogi, yahan class de di hai */}
          <img src={logoImg} alt="Earth Developers Logo" className="logo-main" />
        </Link>
      </div>
      
      {/* Updated Links: Services ki jagah About Us dal diya hai */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
        <li><Link to="/packages" onClick={closeMenu}>Packages</Link></li>
        <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>

      {/* Mobile Toggle Button */}
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className={`bar ${isOpen ? "animate" : ""}`}></div>
        <div className={`bar ${isOpen ? "animate" : ""}`}></div>
        <div className={`bar ${isOpen ? "animate" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;