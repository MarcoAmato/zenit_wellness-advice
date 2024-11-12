// src/components/HeroSection.tsx
import React from 'react';
import { FaRunning, FaAppleAlt, FaBed, FaBrain, FaUsers, FaSmile, FaUserFriends, FaTools } from 'react-icons/fa';
import './Style.css';
import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

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
      <Container>
        <Row>

          <Col md="4" sm="6" xs="6">
            <Link to="/specificsection" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="hero-button">
                <div className="icon-background"><FaAppleAlt className="button-icon" /></div>
                <p className='bold'>Nutrition</p>
              </div>
            </Link>
          </Col>

          <Col md="4" sm="6" xs="6">
            <Link to="/specificsection" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="hero-button">
                <div className="icon-background"><FaRunning className="button-icon" /></div>
                <p className='bold'>Exercise</p>
              </div>
            </Link>
          </Col>

          <Col md="4" sm="6" xs="6">
            <Link to="/specificsection" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="hero-button">
                <div className="icon-background"><FaBrain className="button-icon" /></div>
                <p className='bold'>Mindset</p>
              </div>
            </Link>
          </Col>

          <Col md="4" sm="6" xs="6">
            <Link to="/specificsection" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="hero-button">
                <div className="icon-background"><FaBed className="button-icon" /></div>
                <p className='bold'>Sleep</p>
              </div>
            </Link>
          </Col>

          <Col md="4" sm="6" xs="6">
            <Link to="/specificsection" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="hero-button">
                <div className="icon-background"><FaUsers className="button-icon" /></div>
                <p className='bold'>Social Connections</p>
              </div>
            </Link>
          </Col>

          <Col md="4" sm="6" xs="6">
            <Link to="/specificsection" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="hero-button">
                <div className="icon-background"><FaSmile className="button-icon" /></div>
                <p className='bold'>Stress Management</p>
              </div>
            </Link>
          </Col>

        </Row>
      </Container>
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
