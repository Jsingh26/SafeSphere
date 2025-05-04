import React from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const MapComponent: React.FC<{ start: string; end: string; }> = ({ start, end }) => {
  const [directions, setDirections] = React.useState<any>(null);

  const handleDirections = (response: any) => {
    if (response && response.status === 'OK') {
      setDirections(response);
    } else {
      alert('Error fetching directions. Please check the start and end points.');
      console.error('Error fetching directions:', response);
    }
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_ACTUAL_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        id="map"
        mapContainerStyle={{ height: "400px", width: "800px" }}
        zoom={14}
        center={{ lat: 28.6139, lng: 77.2090 }} // Center on Delhi
      >
        <DirectionsService
          options={{
            destination: end,
            origin: start,
            travelMode: "DRIVING" as google.maps.TravelMode, // Cast to TravelMode
          }}
          callback={handleDirections}
        />
        {directions && (
          <DirectionsRenderer
            options={{
              directions: directions,
              suppressMarkers: true,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
