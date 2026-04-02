import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-luxury">
      <div className="hero-vignette">
        <div className="hero-main-container">
          
          <div className="hero-fade-content">
            <h1 className="hero-main-title">
              Earth Developers
            </h1>
            
            <div className="hero-tagline-box">
              <span className="tagline-main">Premium Websites | Business Growth </span>
              <p className="tagline-sub">Get your brand online with our premium packages.</p>
            </div>
            
            <div className="hero-cta-group">
              <Link to="/packages" className="luxury-btn-gold">
                View Packages
              </Link>
              <Link to="/contact" className="luxury-btn-outline">
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;