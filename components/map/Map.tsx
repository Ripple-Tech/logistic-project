'use client';

import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

interface MapProps {
  selectedPosition: { latitude: string; longitude: string;  magnitude?: number; } | null;
}

const icon = L.icon({
  iconUrl: '/placeholder.png',
  iconSize: [38, 38],
});

const MapComponent: React.FC<{ center: [number, number]; zoom: number }> = ({ center, zoom }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom, {
      animate: true,
    });
  }, [center, zoom, map]);

  return null;
};

const Map: React.FC<MapProps> = ({ selectedPosition }) => {
  const [center, setCenter] = useState<[number, number]>([9.0563, 7.4985]);
  const [zoom, setZoom] = useState<number>(7); // default zoom

  useEffect(() => {
    if (selectedPosition) {
      setCenter([parseFloat(selectedPosition.latitude), parseFloat(selectedPosition.longitude)]);

      // Convert magnitude to zoom:
      const calculatedZoom = 14 - (selectedPosition.magnitude ?? 7); // smaller magnitude = zoomed in
      setZoom(Math.max(2, Math.min(zoom, calculatedZoom))); // clamp between 2 and 14
    }
  }, [selectedPosition]);

  return (
    <MapContainer style={{ height: "420px" }} center={center} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} icon={icon}>
        <Popup>
          {selectedPosition?.latitude}, {selectedPosition?.longitude}
        </Popup>
      </Marker>
      <MapComponent center={center} zoom={zoom} />
    </MapContainer>
  );
};

export default Map;