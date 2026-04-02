import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import aboutImage from '../assets/hero-bg.jpg'; 
import agencyLogo from '../assets/logo.png'; 

const About = () => {
  return (
    <div className="about-page-wrapper">
      {/* --- Section 1: Hero Header --- */}
      <header className="about-header">
        <h1>Our <span>Legacy</span></h1>
        <p>Architecting Digital Wonders Since 2021</p>
      </header>

      {/* --- Section 2: Detailed Story --- */}
      <section className="about-story-section">
        <div className="about-container">
          <div className="about-text-full">
            <span className="gold-subtitle">The Earth Developers Story</span>
            <h2>From a Vision to a <span>Global Agency</span></h2>
            <p className="story-para">
              Earth Developers was established with a singular, uncompromising mission: to redefine the digital experience. We observed a world full of cookie-cutter websites and decided that businesses deserved more. They deserved **Digital Empires.**
            </p>
            <p className="story-para">
              Our journey started by mastering the intersection of high-end aesthetics and robust engineering. We don't just write code; we craft experiences that resonate with users and drive massive growth for our partners. Every project we undertake is a testament to our obsession with perfection.
            </p>
            <p className="story-para">
              Today, Earth Developers stands as a beacon of innovation in the tech industry, specializing in everything from luxury Real Estate portals to high-velocity E-commerce ecosystems. We are not just your developers; we are your strategic digital architects.
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 3: OUR PORTFOLIO (Redirecting to Home) --- */}
      <section className="about-portfolio-cta">
        <div className="portfolio-content">
          <div className="logo-showcase">
            <img src={agencyLogo} alt="Earth Developers Emblem" className="floating-logo" />
          </div>
          <div className="cta-details">
            <h2>Our <span>Masterworks</span></h2>
            <p>
              Actions speak louder than words. Explore the digital landscapes we have crafted for industry leaders across the globe. Our work is a collection of success stories, innovation, and pure craftsmanship.
            </p>
            {/* Button updated to go back to Home Page */}
            <Link to="/" className="btn-view-portfolio">
              Explore Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* --- Section 4: Core Values --- */}
      <section className="values-section">
        <div className="values-grid">
          <div className="value-card">
            <h3>Precision</h3>
            <p>Every line of code is optimized for speed and security.</p>
          </div>
          <div className="value-card">
            <h3>Elegance</h3>
            <p>Luxury designs that capture and hold user attention.</p>
          </div>
          <div className="value-card">
            <h3>Scale</h3>
            <p>Systems built to grow alongside your business ambitions.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;