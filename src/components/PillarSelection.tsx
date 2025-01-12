import React, { useEffect, useState } from 'react';
import { FaRunning, FaAppleAlt, FaBed, FaBrain, FaUsers, FaSmile, FaTools, FaQuestion } from 'react-icons/fa';
import './PillarSelection.css';
import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLoading } from '../utils/LoadingContext/LoadingContext';
import { getAvailablePillars, getDisplyNameByPillar } from '../utils/dataUtils';
import PillarCard from './PillarSelection/PillarCard';

const pillarIcons: { [key: string]: React.ElementType } = {
  'nutrition': FaAppleAlt,
  'exercise': FaRunning,
  'sleep': FaBed,
  'mindset': FaBrain,
  'social-connections': FaUsers,
  'stress-management': FaSmile,
  'expert-services': FaTools
};

const PillarSelectionSection: React.FC = () => {
  const { setIsLoading } = useLoading();
  const [pillars, setPillars] = useState<string[]>([]);

  useEffect(() => {
    setIsLoading(false);
    const pillars = getAvailablePillars();
    setPillars(pillars);
  }, [setIsLoading]);

  return (
    <section className="hero-section">
      <Container className="pillar-container">
        <Row>
          {pillars.map((pillar) => {
            const IconComponent = pillarIcons[pillar.toLowerCase()] || FaQuestion;
            const displayName = getDisplyNameByPillar(pillar);
            return (
              <PillarCard key={pillar} pillar={pillar} IconComponent={IconComponent} displayName={displayName} />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default PillarSelectionSection;