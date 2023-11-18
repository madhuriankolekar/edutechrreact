// src/components/MathCard.js
import React from 'react';
import './MathCard.css';

const MathCard = ({ number }) => {
  return (
    <div className="math-card">
      <p>{number}</p>
    </div>
  );
};

export default MathCard;
