import React from "react";
import ReactDOM from "react-dom";
import { MapsApp } from "./MapsApp";


import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoidXJpZWxjYXJyaW9uIiwiYSI6ImNramFjeTZ6MTJtbWoyeXNidnk2ZHhoMzAifQ.fLi9Zu6qRsrBR00NS_j2ag';


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
