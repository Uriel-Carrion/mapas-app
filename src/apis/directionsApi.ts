import axios from "axios";

const token: string = process.env.REACT_APP_TOKEN || "";

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: "geojson",
    language: "es",
    overview: "simplified",
    steps: false,
    access_token: token,
  },
});

export default directionsApi;
