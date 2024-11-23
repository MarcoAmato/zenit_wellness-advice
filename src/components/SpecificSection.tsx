import React, { useState, useEffect } from 'react';
import { FaQuestion } from 'react-icons/fa';
import { IconType } from 'react-icons';
import './Style.css';
import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import { getArticlesByPillar } from '../utils/dataUtils';
import { getIconByPillar } from '../utils/iconUtils';
import { Article } from '../utils/types';

const SpecificSection: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [displayName, setDisplayName] = useState<string>('Nutrition');
    const [IconComponent, setIconComponent] = useState<IconType>(() => FaQuestion);
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const pillarParam = params.get('pillar') || 'nutrition'; // Default to 'nutrition' if no pillar is specified
        console.log(`Pillar clicked: ${pillarParam}`);
        const { articles, displayName } = getArticlesByPillar(pillarParam);
        setArticles(articles);
        setDisplayName(displayName);
        setIconComponent(() => getIconByPillar(pillarParam));
    }, [location]);

    return (
        <section className="specific-section">
            <Container>
                <Row>
                    <Col lg="12">
                        <div className="hero-button">
                            <div className="icon-background">
                                {IconComponent && <IconComponent className="button-icon" />}
                            </div>
                            <p className='bold'>{displayName}</p>
                        </div>
                    </Col>
                    {Array.isArray(articles) && articles.map((article, index) => (
                        <Col key={index} className="marginCol" lg="12">
                            <Link to={`/article-details?title=${encodeURIComponent(article.title)}&body=${encodeURIComponent(article.body)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
