// src/components/HeroSection.tsx

import React from 'react';
import { FaRunning, FaAppleAlt, FaBed, FaBrain, FaUsers, FaSmile } from 'react-icons/fa'; // Import icons
import './HeroSection.css'; // Importing CSS for styling

interface HeroSectionProps {}

// HeroSection component
const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="hero-section">
      {/* Logo and title */}
      <div>
        {/* Logo */}
        <img
          className="hero-logo"
          src="img/hero-logo.png"
          alt="Hero"
        />

        {/* Main title */}
        <h1 className="hero-title">Zenit</h1>
      </div>

      {/* Subtitle */}
      <p className="hero-subtitle">
        Discover science-backed insights for a healthier, more fulfilling life.
      </p>
      
      {/* Navigation buttons */}
      <div className="hero-buttons">
        <button className="hero-button">
          <FaRunning className="button-icon" /> {/* Exercise Icon */}
          Exercise
        </button>
        <button className="hero-button">
          <FaAppleAlt className="button-icon" /> {/* Nutrition Icon */}
          Nutrition
        </button>
        <button className="hero-button">
          <FaBed className="button-icon" /> {/* Sleep Icon */}
          Sleep
        </button>
        <button className="hero-button">
          <FaBrain className="button-icon" /> {/* Mindset Icon */}
          Mindset
        </button>
        <button className="hero-button">
          <FaUsers className="button-icon" /> {/* Social Relationships Icon */}
          Social Relationships
        </button>
        <button className="hero-button">
          <FaSmile className="button-icon" /> {/* Stress Management Icon */}
          Stress Management
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
