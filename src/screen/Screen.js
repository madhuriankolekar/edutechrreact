// Screen.js
import React from 'react';

const Screen = ({ screenName }) => {
  return (
    <div>
      <h1>{screenName}</h1>
      <p>This is the content of {screenName}.</p>
    </div>
  );
};

export default Screen;
