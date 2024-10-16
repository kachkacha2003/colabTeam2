import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


const MapComponent: React.FC = () => {
    const latitule: number = 41.713182;
    const longtitude: number = 44.781479;
  const position: [number, number] = [latitule, longtitude]; 

  return (
    <MapContainer center={position} zoom={50} style={{ height: "200px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;