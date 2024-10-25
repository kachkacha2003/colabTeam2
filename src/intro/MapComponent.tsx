import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Context } from '../Context/PageProvider';


const MapComponent: React.FC = () => {
  const {coordinates} = Context()
  const [mapPosition, setMapPosition] = useState<[number, number]>([0, 0]);
  
    const lat: number = coordinates?.lat ?? 0
    const lon: number = coordinates?.lon ?? 0
  const position: [number, number] = [lat, lon]; 
  console.log(position)

  useEffect(() => {
    if (coordinates) {
      setMapPosition([coordinates.lat, coordinates.lon]);
    }
  }, [coordinates]);
  console.log(mapPosition)

  return (
    <MapContainer center={mapPosition} zoom={5} style={{ height: "200px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      <Marker position={mapPosition}>
        <Popup>
          This is your location!
        </Popup>
      </Marker>
      </MapContainer>
  );
};

export default MapComponent;