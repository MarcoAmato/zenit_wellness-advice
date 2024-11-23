import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import './Style.css';
import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import { Article } from '../utils/types';

const ArticleDetails: React.FC = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const title = params.get('title') || 'Article Title';
    const body = params.get('body') || 'Article Body';

    return (
        <section className="specific-section">
            <Container>
                <Row>
                    <Col lg="12">
                        <div className="hero-button">
                            <div className="icon-background"><FaQuestion className="button-icon" /></div>
                            <p className='bold'>{title}</p>
                        </div>
                    </Col>
                    <Col className='marginCol' lg="12">
                        <div className="divQuestion">
                            <div className="col-left">
                                <p>{title}</p>
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
                            <p>{body}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ArticleDetails;