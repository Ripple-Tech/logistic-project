'use client';
import type { FC } from 'react';
import Map from '@/components/map/Map';

interface MapWrapperProps {
  selectedPosition: { latitude: string; longitude: string } | null;
}

const MapWrapper: FC<MapWrapperProps> = ({ selectedPosition }) => {
  return <Map selectedPosition={selectedPosition} />;
};

export default MapWrapper;
