import {
  GoogleMap,
  Marker,
  withGoogleMap,
  Polygon,
  GroundOverlay
} from "react-google-maps";
import {
  generateRandomPoints,
  getCoordFormat,
  generateShadeOfGreen
} from "./helpers";
import React from "react";
import { data } from "../../data/bounds";

const defaultLocation = {
  lat: -36.898304,
  lng: 174.918004
};

export class Map extends React.Component {
  render() {
    const bounds = getCoordFormat(data);

    // random bin locations
    const points = generateRandomPoints(defaultLocation, 1500, 15);

    const GoogleMapComponent = withGoogleMap(props => (
      <GoogleMap defaultZoom={15} defaultCenter={defaultLocation}>
        <div>HELLO</div>
        {bounds.map(bound => {
          const green = generateShadeOfGreen();
          return (
            <Polygon
              defaultPath={bound}
              options={{ fillColor: `rgb(0, ${green}, 0)`, strokeOpacity: 0.3 }}
            />
          );
        })}
        {points.map((point, index) => (
          <Marker
            key={index}
            position={{ lat: point.lat, lng: point.lng }}
            icon={{ url: "./bin.png" }}
          />
        ))}
      </GoogleMap>
    ));

    return (
      <GoogleMapComponent
        containerElement={<div style={{ height: `100%`, width: "100%" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
