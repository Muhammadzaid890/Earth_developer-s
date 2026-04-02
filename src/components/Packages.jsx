import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Packages.css';

const Packages = () => {
  const categories = [
    { title: "Real Estate Portal", icon: "🏠", desc: "Property listings & lead gen." },
    { title: "E-Commerce Store", icon: "🛒", desc: "Full online shopping system." },
    { title: "Local Shop/Retail", icon: "🏪", desc: "Digital presence for local reach." },
    { title: "Corporate Business", icon: "🏢", desc: "Professional firm portfolios." },
    { title: "Medical & Health", icon: "🏥", desc: "Doctor booking & clinic sites." },
    { title: "Restaurant & Cafe", icon: "🍕", desc: "Online menus & reservations." },
    { title: "Education/LMS", icon: "🎓", desc: "Learning management systems." },
    { title: "Personal Portfolio", icon: "👤", desc: "For artists, devs & freelancers." },
    { title: "Travel & Tourism", icon: "✈️", desc: "Booking & destination guides." },
    { title: "Logistics & Cargo", icon: "🚛", desc: "Tracking & service management." },
    { title: "Fashion & Beauty", icon: "💄", desc: "Luxury brand showcases." },
    { title: "NGO & Non-Profit", icon: "🤝", desc: "Donation & cause awareness." },
    { title: "Tech Startup", icon: "🚀", desc: "Modern landing pages for SaaS." },
    { title: "Gym & Fitness", icon: "💪", desc: "Class schedules & memberships." },
    { title: "Legal & Law Firm", icon: "⚖️", desc: "Trust-based expert profiles." }
  ];

  return (
    <section className="packages-page">
      <div className="section-title">
        <h2>Choose Your <span>Industry Package</span></h2>
        <p>Premium digital solutions for every sector. Earth Developers builds it all.</p>
      </div>

      <div className="packages-grid">
        {categories.map((item, index) => (
          <div className="package-card-premium" key={index}>
            <div className="package-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <Link to="/contact" className="btn-more-info">
              More Information
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;