import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 5,
    language: "es",
    access_token:
      "pk.eyJ1IjoidXJpZWxjYXJyaW9uIiwiYSI6ImNramFjeTZ6MTJtbWoyeXNidnk2ZHhoMzAifQ.fLi9Zu6qRsrBR00NS_j2ag",
  },
});

export default searchApi;
