import * as React from 'react';
import dynamic from 'next/dynamic';
import items from './items.json';

type Props = {};

/* eslint max-len: ["error", { "code": 100, "tabWidth": 4 }]*/
export const LiveMap: React.FC<Props> = () => {
  const [position, setPosition] = React.useState({lng: 100.523186, lat: 13.736717});
  const Map: any = dynamic(() => import('./Map'), {ssr: false});
  return items ?
<Map position={position} items={items} />:
<div className="map--loading">Loading...</div>;
};
