import React from 'react';
import { FaRunning, FaAppleAlt, FaBed, FaBrain, FaUsers, FaSmile, FaUserFriends, FaTools } from 'react-icons/fa';
import './HeroSection.css';
import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SpecificSection: React.FC = () => {
  return (
    <section className="hero-section">

      <Container>
        <Row>
          <Col>
            <div className="hero-button">
              <div className="icon-background"><FaAppleAlt className="button-icon" /></div>
              <p>Nutrition</p>
            </div>
          </Col>
        </Row>
      </Container>

    </section>
  );
};

export default SpecificSection;
