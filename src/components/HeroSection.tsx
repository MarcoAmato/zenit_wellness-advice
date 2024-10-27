// src/components/HeroSection.tsx

import React from 'react';
import './HeroSection.css'; // Importing CSS for styling

// Define the props interface (if you need to add props later)
interface HeroSectionProps {}

// HeroSection component
const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="hero-section">
      {/* Hero image */}
      <img
        className="hero-logo"
        src="img/hero-logo.png"
        alt="Hero"
      />

      {/* Main title */}
      <h1 className="hero-title">Your Path to Wellness</h1>
      
      {/* Subtitle */}
      <p className="hero-subtitle">
        Discover science-backed insights for a healthier, more fulfilling life.
      </p>
      
      {/* Navigation buttons */}
      <div className="hero-buttons">
        <button className="hero-button">Exercise</button>
        <button className="hero-button">Nutrition</button>
        <button className="hero-button">Sleep</button>
        <button className="hero-button">Mindset</button>
        <button className="hero-button">Social Relationships</button>
        <button className="hero-button">Stress Management</button>
      </div>
    </section>
  );
};

export default HeroSection;
