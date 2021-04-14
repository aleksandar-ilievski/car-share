import React from 'react';
import {useState} from 'react';
import MapGL, {Marker} from 'react-map-gl';

const MAPBOX_TOKEN ="pk.eyJ1IjoiYWxla3NhbmRhcjQ2IiwiYSI6ImNrbjk0d3dlNzBhZzQyeG1ydWhyZjB1azEifQ.xAOI3OiwXjB4AAhkSe7vXw";

export default function Root() {
  const [viewport, setViewport] = useState({
    latitude: 42.13416410914778,
    longitude: 21.723253210147025,
    zoom: 14,
    bearing: 0,
    pitch: 0
  });

  const [settings, setSettings] = useState({
    dragPan: true,
    dragRotate: false,
    scrollZoom: false,
    touchZoom: false,
    touchRotate: false,
    keyboard: false,
    doubleClickZoom: false,
  });

  return (
    <MapGL
      {...viewport}
      {...settings}
      width="40vw"
      height="70vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}  
    > <Marker latitude={42.134734} longitude={21.722253}>
      <img alt="pin" src="/images/pin.webp" style={{width :"25px", height: "25px"}} /></Marker><Marker latitude={42.136500} longitude={21.724259} >
      <img alt="pin" src="/images/pin.webp" style={{width :"25px", height: "25px"}} /></Marker><Marker latitude={42.138513} longitude={21.719270}>
      <img alt="pin" src="/images/pin.webp" style={{width :"25px", height: "25px"}} /></Marker><Marker latitude={42.135302} longitude={21.729336} >
      <img alt="pin" src="/images/pin.webp" style={{width :"25px", height: "25px"}} /></Marker><Marker latitude={42.129490} longitude={21.721457} >
      <img alt="pin" src="/images/pin.webp" style={{width :"25px", height: "25px"}} /></Marker><Marker latitude={42.134741} longitude={21.717212} >
      <img alt="pin" src="/images/pin.webp" style={{width :"25px", height: "25px"}} /></Marker> </MapGL>
  );
}