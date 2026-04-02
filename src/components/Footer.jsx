import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'; // Is file ko lazmi check karein
import logoImg from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="premium-footer-final">
      <div className="footer-grid-container">
        
        {/* Column 1: Branding & Animated Socials */}
        <div className="footer-brand-column">
          <img src={logoImg} alt="Earth Developers" className="footer-main-logo" />
          <p className="footer-desc">
            Architecting elite digital experiences. We turn visionary ideas into premium realities.
          </p>
          
          <div className="social-icon-wrapper">
            {/* Real Links Added Here */}
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="footer-icon-box">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="footer-icon-box">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.google.com" target="_blank" rel="noreferrer" className="footer-icon-box">
              <i className="fab fa-google"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="footer-icon-box">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-links-column">
          <h4 className="footer-label">Navigation</h4>
          <ul className="footer-ul">
            <li><Link to="/">Home Landscape</Link></li>
            <li><Link to="/about">Our Legacy</Link></li>
            <li><Link to="/packages">Premium Plans</Link></li>
            <li><Link to="/contact">Reach Out</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-info-column">
          <h4 className="footer-label">Official Hub</h4>
          <p>Email: info@earthdevelopers.com</p>
          <p className="footer-gold-tag">ESTABLISHED 2021</p>
        </div>

      </div>

      <div className="footer-copyright-bar">
        <p>&copy; 2026 <span>EARTH DEVELOPERS</span>. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;