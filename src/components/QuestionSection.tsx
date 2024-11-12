import React from 'react';
import { FaRunning, FaAppleAlt, FaBed, FaBrain, FaUsers, FaSmile, FaUserFriends, FaTools, FaQuestion } from 'react-icons/fa';
import './Style.css';
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
                            <p className='bold'>Nutrition</p>
                        </div>
                    </Col>
                    <Col className='marginCol' lg="12">
                        <div className="divQuestion">
                            <div className="col-left">
                                <p>How important is fiber intake in the diet</p>
                            </div>
                            <div className="col-right">
                                <FaQuestion className="button-icon" />
                            </div>
                        </div>
                    </Col>
                    <Col className='marginCol' lg="12">
                        <hr></hr>
                    </Col>
                    <Col className='marginCol' lg="12">
                        <div className="divQuestion">
                            <p>Fiber is essential for good digestion and for preventing chronic diseases such as type 2 diabetes. They are found mainly in whole foods, fruits and vegetables.</p>
                        </div>
                    </Col>
                    <Col className='marginCol' lg="12">
                        <div>
                            <p className='references'>References</p>
                        </div>
                    </Col>
                    <Col lg="12">
                        <div className="divQuestion">
                            <p>Harvard Nutrition Source - Fiber</p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default QuestionSection;