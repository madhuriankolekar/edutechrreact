// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './Card';
import Screen from './Screen';

const Cards = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Screen 1 */}
        <Route path="/screen1" element={<Screen screenName="Screen 1" />} />

        {/* Route for Screen 2 */}
        <Route path="/screen2" element={<Screen screenName="Screen 2" />} />

        {/* Default Route - Landing Page */}
        <Route path="/" element={
          <div id="card-container">
            {/* Card 1 */}
            <Card imagePath="image1.jpg" title="Card 1" linkTo="/screen1" />

            {/* Card 2 */}
            <Card imagePath="image2.jpg" title="Card 2" linkTo="/screen2" />
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default Cards;
