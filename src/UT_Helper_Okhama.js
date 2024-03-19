import React from 'react';
import './UT_Helper_Okhama.css';

const UT_Helper_Okhama = ({ radius }) => {
  const calculateArea = (radius) => {
    return Math.PI * Math.pow(radius, 2);
  };

  const area = calculateArea(radius);

  return (
    <div className="circle-info">
      <h2>Luas Lingkaran</h2>
      <p>Jari-jari: {radius}</p>
      <p>Luas: {area.toFixed(2)}</p>
    </div>
  );
};

export default UT_Helper_Okhama;
