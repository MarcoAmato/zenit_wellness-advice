import React from 'react';
import { FaQuestion, FaExternalLinkAlt } from 'react-icons/fa';
import '../Style.css';
import '../CommonStyles.css';
import "./ArticleDetails.css";
import { Col, Container, Row, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import SourceList from '../ArticleDetails/SourceList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { getArticleById, getPillarByArticleId, getPillarKeyByValue } from '../../utils/dataUtils';
import { getIconByPillar } from '../../utils/iconUtils';
import GoBackButton from '../GoBackButton/GoBackButton'; // Import the new component

const ArticleDetails: React.FC = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = parseInt(params.get('id') || "-1");
    const article = getArticleById(id);
    const pillar = getPillarByArticleId(id);
    const pillarKey = getPillarKeyByValue(pillar || '');
    const IconComponent = getIconByPillar(pillarKey || '');

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    if (!article) {
        return (
            <section className="specific-section">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="hero-button">
                                <div className="icon-background"><FaQuestion className="button-icon" /></div>
                                <p className='bold'>Article not found</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }

    return (
        <section className="specific-section">
            <Container>
                <Row>
                    <Col lg="12">
                        <GoBackButton handleGoBack={handleGoBack} /> {/* Use the new component */}
                        <div className="hero-button">
                            <div className="icon-background"><IconComponent className="button-icon" /></div>
                            <p className='bold'>{pillar}</p>
                        </div>
                    </Col>
                    <Col className='marginCol' lg="12">
                        <Card className="article-card">
                            <CardBody>
                                <CardTitle tag="h2" className='card-title-common'>{article.title}</CardTitle>
                                <CardText>{article.body}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className='marginCol' lg="12">
                        <SourceList sources={article.sources} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ArticleDetails;