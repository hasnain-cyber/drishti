import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 22.520389417283287, lng: 75.9207230968753 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function location() {
  return (
    <div style={{ width: "20rem", height: "100%", marginLeft: "5rem" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAomm53RJb5P_7kYzTQchK5xHpO9yHvluk&callback=initMap`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
