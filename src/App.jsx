import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; 
import Packages from './components/Packages';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Naya Footer Import

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <Navbar />

        <Routes>
          {/* 1. HOME PAGE: Full Agency Flow */}
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Packages />
              <Contact />
            </>
          } />

          {/* 2. ABOUT PAGE: Detailed Story & Branding */}
          <Route path="/about" element={<About />} />

          {/* 3. PACKAGES PAGE: Selection of 15+ Industry Packages */}
          <Route path="/packages" element={<Packages />} />

          {/* 4. CONTACT PAGE: WhatsApp & Custom Inquiry Form */}
          <Route path="/contact" element={<Contact />} />

          {/* 5. PROJECTS PAGE: Portfolio Showcase (Placeholder for now) */}
          <Route path="/projects" element={
            <div style={{ 
              padding: '150px 20px', 
              textAlign: 'center', 
              background: '#0c0c0c', 
              color: 'white', 
              minHeight: '80vh' 
            }}>
              <h2 style={{ color: '#D4AF37', fontSize: '3rem', letterSpacing: '5px' }}>
                OUR PREMIUM PORTFOLIO
              </h2>
              <p style={{ color: '#888', marginTop: '20px', fontSize: '1.2rem' }}>
                Showcasing Earth Developers' masterworks soon...
              </p>
            </div>
          } />
        </Routes>

        {/* Naya Premium Footer Component (Jo humne abhi banaya) */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;