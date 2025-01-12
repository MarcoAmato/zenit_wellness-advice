import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuestion } from 'react-icons/fa';
import { getColorByPillar } from '../../utils/dataUtils';
import './PillarCard.css';
import { Col } from 'reactstrap';

interface PillarCardProps {
  pillar: string;
  IconComponent: React.ElementType;
  displayName: string;
}

const PillarCard: React.FC<PillarCardProps> = ({ pillar, IconComponent, displayName }) => {
  const iconColor = getColorByPillar(pillar).toLowerCase();
  console.log(iconColor);

  return (
    <Col md="4" sm="6" xs="6">
      <Link to={`/pillar-articles?pillar=${pillar}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="hero-button">
          <div className="icon-background" style={{ backgroundColor: iconColor }}>
            <IconComponent className="button-icon" />
          </div>
          <p className='bold'>{displayName}</p>
        </div>
      </Link>
    </Col>
  );
};

export default PillarCard;