import React, { useState, useEffect } from 'react';
import { FaRunning, FaAppleAlt, FaBed, FaBrain, FaUsers, FaSmile, FaUserFriends, FaTools, FaQuestion } from 'react-icons/fa';
import './Style.css';
import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { getArticlesByPillar } from '../utils/dataUtils';
import { Article } from '../utils/types';

const SpecificSection: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchedArticles = getArticlesByPillar('nutrition'); // Change 'nutrition' to the desired pillar
        setArticles(fetchedArticles);
    }, []);

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
                    {articles.map((article, index) => (
                        <Col key={index} className="marginCol" lg="12">
                            <Link to="/questionsection" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="divQuestion">
                                    <div className="col-left">
                                        <p>{article.title}</p>
                                    </div>
                                    <div className="col-right">
                                        <FaQuestion className="button-icon" />
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default SpecificSection;
