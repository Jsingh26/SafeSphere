import React from 'react';
import { useLocation } from 'react-router-dom';
import MapComponent from './MapComponent';

const RoutePage: React.FC = () => {
  const location = useLocation();
  const { start, end } = location.state || { start: '', end: '' };

  return (
    <div>
      <h1>Route from {start} to {end}</h1>
      <MapComponent start={start} end={end} />
    </div>
  );
};

export default RoutePage;
