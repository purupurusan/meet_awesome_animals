import * as React from 'react';

import {Map as M, TileLayer, Marker, Popup} from 'react-leaflet-universal';
import L from 'leaflet'; // leafletはSSRでimportできない

/* eslint max-len: ["error", { "code": 100, "tabWidth": 4 }]*/
const iconPerson = new L.Icon({
  iconUrl: '/images/icon.svg',
  iconRetinaUrl: '/images/icon.svg',
  iconSize: [40, 40],
});

const MAXIMUM_ZOOM = 18;

type Props = {
  position: { lat: number; lng: number };
  items: Item[];
};

const Map: React.FC<Props> = ({position, items}) => (
  <M center={position} zoom={MAXIMUM_ZOOM} doubleClickZoom={false}>
    <TileLayer
      attribution='copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map((item: any) => (
      <Marker position={{lat: item.geo.x, lng: item.geo.y}} icon={iconPerson} key={item.id}>
        <Popup>{item.description}</Popup>
      </Marker>
    ))}
  </M>
);

export default Map;
