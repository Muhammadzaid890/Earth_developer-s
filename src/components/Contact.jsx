import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    duration: '',
    message: ''
  });

  // WhatsApp par message bhejne ka function
  const handleWhatsApp = (e) => {
    e.preventDefault();
    const phoneNumber = "923001234567"; // 👈 Yahan apna asli WhatsApp number likhein (Country code ke saath)
    const text = `Assalam o Alaikum Earth Developers! 
    My Name: ${formData.name}
    Service: ${formData.service}
    Duration: ${formData.duration}
    Message: ${formData.message}`;
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="contact-section">
      <div className="contact-overlay">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Let's Build Your <span>Digital Empire</span></h2>
            <p>Select your preferred maintenance plan or go for a permanent solution.</p>
            
            <div className="social-links-premium">
              <p>Connect with us on:</p>
              <a href="https://instagram.com/your_id" target="_blank" className="insta-link">Instagram DM</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleWhatsApp}>
            <div className="input-row">
              <input type="text" placeholder="Full Name" required 
                onChange={(e) => setFormData({...formData, name: e.target.value})} />
              <input type="email" placeholder="Email Address" required 
                onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>

            {/* Service Selection */}
            <select className="premium-select" required 
              onChange={(e) => setFormData({...formData, service: e.target.value})}>
              <option value="">Select Service Type</option>
              <option value="Real Estate">Real Estate Portal</option>
              <option value="E-commerce">E-Commerce Store</option>
              <option value="Business">Business Portfolio</option>
              <option value="Business">Local Shop/Retail</option>
              <option value="Business">Medical & Health</option>
              <option value="Business">Restaurant & Cafe</option>
              <option value="Business">Education/LMS</option>
              <option value="Business">Personal Portfolio</option>
              <option value="Business">Business Portfolio</option>
              <option value="Business">Travel & Tourism</option>
              <option value="Business">Logistics & Cargo</option>
              <option value="Business">Fashion & Beauty</option>
              <option value="Business">NGO & Non-Profit</option>
              <option value="Business">Tech Startup</option>
              <option value="Business">Legal & Law Firm</option>
              <option value="Business">Gym & Fitness</option>
            </select>

            {/* Duration / Package Type Selection */}
            <select className="premium-select" required 
              onChange={(e) => setFormData({...formData, duration: e.target.value})}>
              <option value="">Select Package Duration</option>
              <option value="3 Months">3 Months (Trial/Short term)</option>
              <option value="6 Months">6 Months (Standard)</option>
              <option value="1 Year">1 Year (Professional)</option>
              <option value="Permanent">Permanent (Lifetime Ownership)</option>
            </select>

            <textarea placeholder="Tell us more about your vision..." rows="4"
              onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>

            <button type="submit" className="btn-whatsapp">
              <span className="wa-icon">💬</span> Message on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;