import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaQuestion } from 'react-icons/fa';
import '../Style.css';
import './PillarArticlesSection.css';
import '../CommonStyles.css'; // Import the common styles
import { Col, Container, Row, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getArticlesByPillar, getColorByPillar } from '../../utils/dataUtils';
import { getIconByPillar } from '../../utils/iconUtils';
import { Article } from '../../utils/types';
import { IconType } from 'react-icons';
import GoBackButton from '../GoBackButton/GoBackButton'; // Import the new component
import { useLoading } from '../../utils/LoadingContext/LoadingContext';

const PillarArticlesSection: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [displayName, setDisplayName] = useState<string>('Nutrition');
    const [IconComponent, setIconComponent] = useState<IconType>(() => FaQuestion);
    const [iconColor, setIconColor] = useState<string>('#000000'); // Default to black
    const location = useLocation();
    const {setIsLoading} = useLoading();

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1); // This will navigate back to the previous page
    };

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const pillarParam = params.get('pillar') || 'nutrition'; // Default to 'nutrition' if no pillar is specified
        console.log(`Pillar clicked: ${pillarParam}`);
        const { articles, displayName } = getArticlesByPillar(pillarParam);
        setArticles(articles);
        setDisplayName(displayName);
        setIconComponent(() => getIconByPillar(pillarParam));
        const pillarColor = getColorByPillar(pillarParam).toLowerCase(); // Ensure the color is in lowercase
        console.log(`Setting icon color to: ${pillarColor}`);
        setIconColor(pillarColor);
        setIsLoading(false);
    }, [location, setIsLoading]);

    return (
        <section className="pillar-articles-section">
            <Container>
                <Row>
                    <Col lg="12">
                        <GoBackButton handleGoBack={handleGoBack} /> {/* Use the new component */}
                        <div className="hero-button">
                            <div className="icon-background" style={{backgroundColor: iconColor}}>
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
                                                <Button className='buttonArticle'>
                                                    View Details
                                                </Button>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section >
    );
};

export default PillarArticlesSection;
