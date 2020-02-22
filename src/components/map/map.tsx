/* eslint-disable react/jsx-key */
import React from "react";
import GoogleMapReact from "google-map-react";
//import { locations } from "./locations";
import GMAPS_API_KEY from "./config";
//import MyGreatPlaceWithHover from "./useMap";
import { K_SIZE } from "../../styles/my_great_place_with_hover_styles";

// interface MarkerProps {
//   locations: JSX.Element[];
// }

// const Markers: React.FC<MarkerProps> = () => {
//   return locations.map(location => (
//     <MyGreatPlaceWithHover
//       text={location.id}
//       lat={location.lat}
//       lng={location.lng}
//     />
//   ));
// };

interface MapProps {
  mapCenter: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

class GMap extends React.Component<MapProps> {
  public static defaultProps: MapProps = {
    mapCenter: { lat: 38.91131141655464, lng: -77.04375138092037 },
    zoom: 16
  };

  render(): JSX.Element {
    return (
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GMAPS_API_KEY }}
          defaultCenter={this.props.mapCenter}
          defaultZoom={this.props.zoom}
          hoverDistance={K_SIZE / 2}
        >
          {/* <Markers /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GMap;
