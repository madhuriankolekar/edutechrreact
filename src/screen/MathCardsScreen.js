import React from 'react';
import { Typography, Paper } from '@mui/material';
import { useSpring, animated } from 'react-spring';

const MathCard = ({ title, description, color, index }) => {
  const styles = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    delay: index * 100,
  });

  return (
    <animated.div style={styles}>
      <Paper style={{ padding: '16px', background: color, margin: '8px' }}>
        <Typography variant="h6">{title}</Typography>
        <Typography>{description}</Typography>
      </Paper>
    </animated.div>
  );
};

const MathCards = () => {
  const cards = Array.from({ length: 10 }, (_, index) => ({
    title: `Maths ${index + 1}`,
    description: `Description for Maths ${index + 1}`,
    color: `hsl(${index * 36}, 70%, 50%)`,
  }));

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {cards.map((card, index) => (
        <MathCard key={index} {...card} index={index} />
      ))}
    </div>
  );
};

const MathCardsScreen = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Mathematics Cards
      </Typography>
      <MathCards />
    </div>
  );
};

export default MathCardsScreen;