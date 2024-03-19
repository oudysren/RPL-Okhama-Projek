import React from 'react';
import { render } from '@testing-library/react';
import UT_Helper_Okhama from './UT_Helper_Okhama';

test('calculates area of circle correctly', () => {
  const radius = 5;
  const expectedArea = Math.PI * Math.pow(radius, 2);
  
  const { getByText } = render(<UT_Helper_Okhama radius={radius} />);
  const radiusElement = getByText(`Jari-jari: ${radius}`);
  const areaElement = getByText(`Luas: ${expectedArea.toFixed(2)}`);
  
  expect(radiusElement).toBeInTheDocument();
  expect(areaElement).toBeInTheDocument();
});
