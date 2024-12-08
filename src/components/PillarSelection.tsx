// src/components/HeroSection.tsx
import React, { useEffect } from 'react';
import { FaRunning, FaAppleAlt, FaBed, FaBrain, FaUsers, FaSmile, FaUserFriends, FaTools } from 'react-icons/fa';
import './Style.css';
import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useLoading } from '../utils/LoadingContext/LoadingContext';

const PillarSelectionSection: React.FC = () => {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    console.log('PillarSelectionSection is loading');
    setIsLoading(false);
    console.log('Loading status: ', setIsLoading);
  }, [setIsLoading]);

  return (
    <section className="hero-section">
      {/* Main buttons */}
      <Container>
        <Row>

        <Col md="4" sm="6" xs="6">
            <Link to="/pillar-articles?pillar=nutrition" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="hero-button">
                <div className="icon-background"><FaAppleAlt className="button-icon" /></div>
                <p className='bold'>Nutrition</p>
              </div>
            </Link>
          </Col>

          <Col md="4" sm="6" xs="6">
            <Link to="/pillar-articles?pillar=exercise" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="hero-button">
                <div className="icon-background"><FaRunning className="button-icon" /></div>
                <p className='bold'>Sport</p>
              </div>
            </Link>
          </Col>

          <Col md="4" sm="6" xs="6">
            <Link to="/pillar-articles?pillar=mindset" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="hero-button">
                <div className="icon-background"><FaBrain className="button-icon" /></div>
                <p className='bold'>Mindset</p>
              </div>
            </Link>
          </Col>

          <Col md="4" sm="6" xs="6">
            <Link to="/pillar-articles?pillar=sleep" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="hero-button">
                <div className="icon-background"><FaBed className="button-icon" /></div>
                <p className='bold'>Sleep</p>
              </div>
            </Link>
          </Col>

          <Col md="4" sm="6" xs="6">
            <Link to="/pillar-articles?pillar=social-connections" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="hero-button">
                <div className="icon-background"><FaUsers className="button-icon" /></div>
                <p className='bold'>Social Connections</p>
              </div>
            </Link>
          </Col>

          <Col md="4" sm="6" xs="6">
            <Link to="/pillar-articles?pillar=stress-management" style={{ textDecoration: 'none', color: 'inherit' }}>
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

export default PillarSelectionSection;
