// src/components/FeatureCard.tsx

import React from 'react';
import { Card } from 'react-bootstrap'; 
import '../style/FeatureCard.css'; 

interface FeatureCardProps {
  title: string;
  description: string;
  isActive: boolean; 
  onHover: () => void; 
  onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, isActive, onHover, onClick }) => {
  return (

    <Card 
      className={`feature-card shadow-sm h-100 ${isActive ? 'active' : ''}`}
      onMouseEnter={onHover}
      onClick={onClick}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FeatureCard;