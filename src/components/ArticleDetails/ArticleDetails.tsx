import React from 'react';
import { FaQuestion, FaExternalLinkAlt } from 'react-icons/fa';
import '../Style.css';
import "./ArticleDetails.css";
import { Col, Container, Row } from 'reactstrap';
import SourceList from '../ArticleDetails/SourceList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import { getArticleById, getPillarByArticleId, getPillarKeyByValue } from '../../utils/dataUtils';
import { getIconByPillar } from '../../utils/iconUtils';

const ArticleDetails: React.FC = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = parseInt(params.get('id') || "-1");
    const article = getArticleById(id);
    const pillar = getPillarByArticleId(id);
    const pillarKey = getPillarKeyByValue(pillar || '');
    const IconComponent = getIconByPillar(pillarKey || '');

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
                        <div className="hero-button">
                            <div className="icon-background"><IconComponent className="button-icon" /></div>
                            <p className='bold'>{pillar}</p>
                        </div>
                    </Col>
                    <Col className='marginCol' lg="12">
                        <div className="divQuestion">
                            <div className="col-left">
                                <p>{article.title}</p>
                            </div>
                            <div className="col-right">
                                <IconComponent className="button-icon" />
                            </div>
                        </div>
                    </Col>
                    <Col className='marginCol' lg="12">
                        <hr></hr>
                    </Col>
                    <Col className='marginCol' lg="12">
                        <div className="divQuestion">
                            <p>{article.body}</p>
                        </div>
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