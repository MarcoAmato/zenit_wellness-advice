import React, { useState, useEffect } from 'react';
import { FaQuestion } from 'react-icons/fa';
import '../Style.css';
import './PillarArticlesSection.css';
import '../CommonStyles.css'; // Import the common styles
import { Col, Container, Row, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import { getArticlesByPillar } from '../../utils/dataUtils';
import { getIconByPillar } from '../../utils/iconUtils';
import { Article } from '../../utils/types';
import { IconType } from 'react-icons';

const PillarArticlesSection: React.FC = () => {
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
        <section className="pillar-articles-section">
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
                        <Col key={index} className="marginCol" lg="6" md="12">
                            <Link to={`/article-details?id=${article.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card className="pillar-card">
                                    <CardBody>
                                        <div className="card-header">
                                            <div className="card-title-container">
                                                <CardTitle tag="h2" className="card-title-common">{article.title}</CardTitle>
                                            </div>
                                            <div className="icon-container">
                                                {/*<div className="icon-background">
                                                    <FaQuestion className="button-icon" />
                                                </div> */}
                                            </div>
                                            <Button color="success">
                                                success
                                            </Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default PillarArticlesSection;
