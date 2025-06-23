// src/components/FeatureCard.tsx

import React from 'react';
import { Card } from 'react-bootstrap'; // Let's use React-Bootstrap for consistency!
import '../style/FeatureCard.css'; // We will create this file for styling

interface FeatureCardProps {
  title: string;
  description: string;
  isActive: boolean;    // To know if it's the active card
  onHover: () => void;  // The function to call on mouse enter
  onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, isActive, onHover, onClick }) => {
  return (
    // We use onMouseEnter to trigger the hover effect
    // We also add a conditional class 'active' for styling
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