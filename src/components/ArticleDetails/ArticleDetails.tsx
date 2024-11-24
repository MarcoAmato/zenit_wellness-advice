import React from 'react';
import { FaQuestion, FaExternalLinkAlt } from 'react-icons/fa';
import '../Style.css';
import "./ArticleDetails.css";
import { Col, Container, Row } from 'reactstrap';
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
                        <div className="sources-container">
                            <h4 className="sources-title">Sources</h4>
                            <ul className="sources-list">
                                {article.sources.map((source, index) => (
                                    <li key={index} className="source-card">
                                        <FaExternalLinkAlt className="source-icon" />
                                        <div className="source-info">
                                            <a href={source.sourceLink} target="_blank" rel="noopener noreferrer" className="source-link">
                                                {source.sourceTitle}
                                            </a>
                                            <p className="source-description">Click to read more on the external site.</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default ArticleDetails;