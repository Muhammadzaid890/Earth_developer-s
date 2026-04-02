import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import agencyLogo from '../assets/logo.png'; 

const About = () => {
  return (
    <div className="about-page-wrapper">
      
      {/* --- Section 1: Proper Spacing & New Headings --- */}
      <section className="about-intro-section">
        <div className="about-container">
          
          <div className="about-header-group">
            <span className="section-tag">About Us</span>
            <h2 className="main-heading">Our <span>Legacy</span></h2>
            <p className="sub-heading">Architecting Digital Wonders Since 2021</p>
          </div>

          <div className="about-text-full">
            <p className="story-para">
              Earth Developers was established with a singular, uncompromising mission: to redefine the digital experience. We observed a world full of cookie-cutter websites and decided that businesses deserved more. They deserved <span className="gold-text">Digital Empires.</span>
            </p>
            <p className="story-para">
              Our journey started by mastering the intersection of high-end aesthetics and robust engineering. We don't just write code; we craft experiences that resonate with users and drive massive growth for our partners. Every project we undertake is a testament to our obsession with perfection.
            </p>
          </div>

          {/* Portfolio CTA */}
          <div className="about-cta-box">
            <img src={agencyLogo} alt="Earth Developers Logo" className="about-logo-small" />
            <h3>Ready to see our work?</h3>
            <Link to="/" className="btn-explore-gold">
              Explore Portfolio
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;