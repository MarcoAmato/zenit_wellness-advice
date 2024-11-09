// src/components/HeroSection.tsx
import React from 'react';
import { FaRunning, FaAppleAlt, FaBed, FaBrain, FaUsers, FaSmile, FaUserFriends, FaTools } from 'react-icons/fa';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      {/* Logo and title */}
      <div className="hero-header">
        <img
          className="hero-logo"
          src="img/hero-logo.png"
          alt="Zenit Logo"
        />
        <h1 className="hero-title">Zenit</h1>
      </div>

      {/* Main buttons */}
      <div className="hero-buttons">
        <div className="hero-button">
          <div className="icon-background"><FaAppleAlt className="button-icon" /></div>
          <p>Nutrition</p>
        </div>
        <div className="hero-button">
          <div className="icon-background"><FaRunning className="button-icon" /></div>
          <p>Exercise</p>
        </div>
        <div className="hero-button">
          <div className="icon-background"><FaBrain className="button-icon" /></div>
          <p>Mindset</p>
        </div>
        <div className="hero-button">
          <div className="icon-background"><FaBed className="button-icon" /></div>
          <p>Sleep</p>
        </div>
        <div className="hero-button">
          <div className="icon-background"><FaUsers className="button-icon" /></div>
          <p>Social Connections</p>
        </div>
        <div className="hero-button">
          <div className="icon-background"><FaSmile className="button-icon" /></div>
          <p>Stress Management</p>
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="bottom-buttons">
        <div className="bottom-button">
          <FaUserFriends className="bottom-button-icon" />
          <p>Communities</p>
        </div>
        <div className="bottom-button">
          <FaTools className="bottom-button-icon" />
          <p>Expert Services</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
