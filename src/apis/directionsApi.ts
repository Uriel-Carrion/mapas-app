import axios from "axios";

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: "geojson",
    language: "es",
    overview: "simplified",
    steps: false,
    access_token:
      "pk.eyJ1IjoidXJpZWxjYXJyaW9uIiwiYSI6ImNramFjeTZ6MTJtbWoyeXNidnk2ZHhoMzAifQ.fLi9Zu6qRsrBR00NS_j2ag",
  },
});

export default directionsApi;
