import React, { useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [address, setAddress] = useState<string>('');
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGeocode = async () => {
    try {
      const response = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          q: address,
          format: 'json',
          addressdetails: 1,
        },
      });

      const results = response.data;
      if (results.length > 0) {
        const { lat, lon } = results[0];
        setCoordinates({ lat: parseFloat(lat), lng: parseFloat(lon) });
        setError(null);
      } else {
        setError('No results found');
      }
    } catch (err) {
      setError('Error fetching data');
    }
  };

  return (
    <div>
      <h1>Address to Latitude/Longitude</h1>
      <input 
        type="text" 
        value={address} 
        onChange={(e) => setAddress(e.target.value)} 
        placeholder="Enter address"
      />
      <button onClick={handleGeocode}>Get Coordinates</button>
      {coordinates && (
        <div>
          <h2>Coordinates:</h2>
          <p>Latitude: {coordinates.lat}</p>
          <p>Longitude: {coordinates.lng}</p>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default App;
