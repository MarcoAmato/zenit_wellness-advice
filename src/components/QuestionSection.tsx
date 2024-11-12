import React from 'react';
import { FaRunning, FaAppleAlt, FaBed, FaBrain, FaUsers, FaSmile, FaUserFriends, FaTools, FaQuestion } from 'react-icons/fa';
import './HeroSection.css';
import './SpecificSection.css';
import './QuestionSection.css';
import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const QuestionSection: React.FC = () => {
    return (
        <section className="specific-section">

            <Container>
                <Row>
                    <Col lg="12">
                        <div className="hero-button">
                            <div className="icon-background"><FaAppleAlt className="button-icon" /></div>
                            <p>Nutrition</p>
                        </div>
                    </Col>
                    <Col className='marginCol' lg="12">
                            <div className="divQuestion">
                                <div className="col-left">
                                    <p>How important is fiber intake in the diet?</p>
                                </div>
                                <div className="col-right">
                                    <FaQuestion className="button-icon" />
                                </div>
                            </div>
                    </Col>
                    <Col className='marginCol' lg="12">
                           <hr></hr>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default QuestionSection;