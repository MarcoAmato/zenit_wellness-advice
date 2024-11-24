import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import './Style.css';
import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import { getArticleById, getPillarByArticleId, getPillarKeyByValue } from '../utils/dataUtils';
import { getIconByPillar } from '../utils/iconUtils';

const ArticleDetails: React.FC = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = parseInt(params.get('id') || "-1");
    const article = getArticleById(id);
    const pillar = getPillarByArticleId(id);
    const pillarKey = getPillarKeyByValue(pillar || '');
    const IconComponent = getIconByPillar(pillarKey || '');

    if(!article) {
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
    } else {
        return (
            <section className="specific-section">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="hero-button">
                                <div className="icon-background">
                                    <IconComponent className="button-icon" />
                                </div>
                                <p className='bold'>{pillar}</p>
                            </div>
                        </Col>
                        <Col className='marginCol' lg="12">
                            <div className="divQuestion">
                                <div className="col-left">
                                    <p>{article.title}</p>
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
                                <p>{article.body}</p>
                            </div>
                        </Col>
                        <Col className='marginCol' lg="12">
                            <h4>Sources</h4>
                            <ul className='list-unstyled'>
                                {article.sources.map((source, index) => (
                                    <li key={index}>
                                        <a href={source.sourceLink} target="_blank" rel="noopener noreferrer">
                                            {/* The "noopener noreferrer" values enhance security and privacy:
                                                - "noopener" prevents the new page from accessing the window.opener property, mitigating potential malicious actions.
                                                - "noreferrer" ensures no referrer information is sent to the new page, protecting user privacy. */}
                                            {source.sourceTitle}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
};

export default ArticleDetails;