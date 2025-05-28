import React from 'react';
import './Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="loader">
        <span className="loader-text">AV</span>
        <div className="loader-spinner"></div>
      </div>
    </div>
  );
};

export default Preloader;