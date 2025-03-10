import React, { useState } from 'react';
import servicesDescriptionImg from '../images/services-description.png';
import About from './About';
import './Home.css';

function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    email: '',
    phone: '',
    hasQuote: false,
    quoteReference: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Default placeholders
  const defaultPlaceholders = {
    fullName: 'Your Full Name',
    address: 'Street Address',
    email: 'Email Address',
    phone: 'Phone Number'
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (formData.hasQuote && !formData.quoteReference.trim()) {
      newErrors.quoteReference = 'Please enter your quote';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Thank you! We will contact you within 12 hours.');
      try {
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setIsSubmitted(true);
        } else {
          throw new Error('Submission failed');
        }
      } catch (error) {
        setErrors({
          submit: 'There was a problem submitting your form. Please try again.'
        });
      }
    }
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="landing-page">
      <div className="hero-section">
        <h1>
          No time to mow? <span className="highlight">We got you!</span>
        </h1>
        <p className="subtitle">Own the best lawn on the block...without lifting a finger.</p>
      </div>

      <div className="opt-in-section">
        <div className="preview-images">
          <img src={servicesDescriptionImg} alt="Offered Services Img" />
        </div>
        
        <div className="signup-form">
          <h2 className="form-title">Get Your Free Estimate</h2>
          <p className="form-note">We will respond within 12 Hours</p>
          
          {isSubmitted ? (
            <div className="success-message">
              <h3>Thank you!</h3>
              <p>We will contact you within 12 hours.</p>
              <p>We're stoked to mow your lawn! 🌿</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input 
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={errors.fullName || defaultPlaceholders.fullName}
                className={`form-input ${errors.fullName ? 'error' : ''}`}
                disabled={isSubmitting}
              />
              <input 
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder={errors.address || defaultPlaceholders.address}
                className={`form-input ${errors.address ? 'error' : ''}`}
                disabled={isSubmitting}
              />
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={errors.email || defaultPlaceholders.email}
                className={`form-input ${errors.email ? 'error' : ''}`}
                disabled={isSubmitting}
              />
              <input 
                type="tel"
                name="phone"
                value={errors.phone || formData.phone}
                onChange={handleChange}
                placeholder={errors.phone || defaultPlaceholders.phone}
                className={`form-input ${errors.phone ? 'error' : ''}`}
                disabled={isSubmitting}
              />

              <div className="quote-option">
                <label className="quote-checkbox">
                  <input
                    type="checkbox"
                    name="hasQuote"
                    checked={formData.hasQuote}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  <span className="checkbox-text">Already have a quote from one of our flyers?</span>
                </label>
              </div>

              {formData.hasQuote && (
                <input
                  type="text"
                  name="quoteReference"
                  value={formData.quoteReference}
                  onChange={handleChange}
                  placeholder={errors.quoteReference || "Enter your quote amount"}
                  className={`form-input quote-reference ${errors.quoteReference ? 'error' : ''}`}
                  disabled={isSubmitting}
                />
              )}

              <div className="button-container">
                <button 
                  type="submit" 
                  className="cta-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Get Your Free Estimate'}
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
      <br></br>
      <p className="home-description">
        Fill out the form above or call/text us at 509-554-8753.
      </p>
      <About />
    </div>
  );
}

export default Home;