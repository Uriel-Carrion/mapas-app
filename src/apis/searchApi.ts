import axios from "axios";

const token: string = process.env.REACT_APP_TOKEN || "";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 5,
    language: "es",
    access_token: token,
  },
});

export default searchApi;
