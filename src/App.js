import React from 'react';
import LandingPage from './screen/LandingPage';

import ImageSlider from './path-to-ImageSlider'; // Adjust the import path

import Grade5Screen from './screen/Grade5Screen';
function App() {
  const imageUrls = [
    require('./assets/image1.jpg'),
    require('./assets/image2.jpg'),
    require('./assets/image3.jpg'),



    require('./assert/download2.jpg'),
    require('./assert/download5.jpg'),
    require('./assert/images.jpg'),

    require('./assert/images55.jpg'),
    require('./assert/images11.jpg'),

   
  ];

  return (
  
    <Routes>
     
     <Switch>
<Route path="/labB" component={Grade5Screen} />

<div>
          <LandingPage imageUrls={imageUrls} /> {/* Pass the imageUrls prop here */}
          <Route path="/" element={<LandingPage />} />
        <Route path="/grade5" element={<Grade5Screen />} />
          <ImageSlider imageUrls={imageUrls} />
          
        </div>
</Switch>
    </Routes>
  
  );
}

export default App;


