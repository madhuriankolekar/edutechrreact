import React from 'react';
import LandingPage from './screen/LandingPage';

import ImageSlider from './path-to-ImageSlider'; // Adjust the import path

function App() {
  const imageUrls = [
    require('./assets/image1.jpg'),
    require('./assets/image2.jpg'),
    require('./assets/image3.jpg'),
  ];

  return (
    <div>
      <LandingPage imageUrls={imageUrls} /> {/* Pass the imageUrls prop here */}
     
      <ImageSlider imageUrls={imageUrls} />
    </div>
  );
}

export default App;
