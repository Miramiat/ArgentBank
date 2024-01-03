// src/components/Feature.js
import React from 'react';

import '../designs/css/main.css';

function Feature({ iconSrc, title, description }) {
  return (
    <div className="feature-item">
      <img src={iconSrc} alt={`${title} Icon`} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Feature;
