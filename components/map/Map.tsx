"use client";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

interface MapProps {
  selectedPosition: { latitude: string; longitude: string; magnitude?: number } | null;
}

const icon = L.icon({
  iconUrl: "/placeholder.png",
  iconSize: [38, 38],
});

const MapUpdater: React.FC<MapProps> = ({ selectedPosition }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedPosition) {
      const newCenter: [number, number] = [
        parseFloat(selectedPosition.latitude),
        parseFloat(selectedPosition.longitude),
      ];

      const calculatedZoom = 14 - (selectedPosition.magnitude ?? 7);
      const newZoom = Math.max(2, Math.min(14, calculatedZoom));

      map.setView(newCenter, newZoom, { animate: true });
    }
  }, [selectedPosition, map]);

  return null;
};

const Map: React.FC<MapProps> = ({ selectedPosition }) => {
  const initialCenter: [number, number] = selectedPosition
    ? [parseFloat(selectedPosition.latitude), parseFloat(selectedPosition.longitude)]
    : [9.0563, 7.4985];

  const initialZoom = selectedPosition
    ? Math.max(2, Math.min(14, 14 - (selectedPosition.magnitude ?? 7)))
    : 7;

  return (
    <MapContainer
      key={`${initialCenter[0]}-${initialCenter[1]}`} // 👈 avoids re-init errors
      style={{ height: "420px" }}
      center={initialCenter}
      zoom={initialZoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {selectedPosition && (
        <Marker position={initialCenter} icon={icon}>
          <Popup>
            {selectedPosition.latitude}, {selectedPosition.longitude}
          </Popup>
        </Marker>
      )}
      <MapUpdater selectedPosition={selectedPosition} />
    </MapContainer>
  );
};

export default Map;
