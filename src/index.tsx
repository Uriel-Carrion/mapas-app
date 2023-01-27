/* eslint import/no-webpack-loader-syntax: off */

import React from "react";
import ReactDOM from "react-dom";
import { MapsApp } from "./MapsApp";

//@ts-ignore
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = process.env.REACT_APP_TOKEN || "";


const errorMessage = "Tu navegador no tiene opción de Geocalización";

if (!navigator.geolocation) {
  alert(errorMessage);
  throw new Error(errorMessage);
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById("root")
);
