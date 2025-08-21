
'use client';

import dynamic from 'next/dynamic';
import type { FC } from 'react';

const Map = dynamic(() => import('@/components/map/Map'), {
  ssr: false,
  loading: () => (
    <div className="h-[250px] flex items-center justify-center bg-gray-100">
      <span className="text-sm text-gray-500">Loading map...</span>
    </div>
  ),
});

interface MapWrapperProps {
  selectedPosition: { latitude: string; longitude: string } | null;
}

const MapWrapper: FC<MapWrapperProps> = ({ selectedPosition }) => {
  return <Map selectedPosition={selectedPosition} />;
};

export default MapWrapper;
