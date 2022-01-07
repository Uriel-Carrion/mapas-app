import { useContext, useState } from "react";
import { LoadingPlaces } from ".";
import { PlacesContext } from "../context/places/PlacesContext";
import { MapContext } from "../context/map/MapContext";
import { Feature } from "../interfaces/places";

export const SearchResults = () => {
  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPoints } = useContext(MapContext);
  const [active, setActive] = useState("");

  const onPlaceClicked = (place: Feature) => {
    const [lng, lat] = place.center;

    setActive(place.id);

    map?.flyTo({
      zoom: 14,
      center: [lng, lat],
    });
  };

  const getRoute = (place: Feature) => {
    if (!userLocation) return;
    const [lng, lat] = place.center;
    getRouteBetweenPoints(userLocation, [lng, lat]);
  };

  if (isLoadingPlaces) {
    return <LoadingPlaces />;
  }

  if (places.length === 0) {
    return <></>;
  }

  return (
    <ul className="list-group mt-3">
      {places.map((place) => (
        <li
          className={`list-group-item list-group-item-action pointer ${
            active === place.id ? "active" : ""
          } `}
          key={place.id}
          onClick={() => onPlaceClicked(place)}
        >
          <h6>{place.text_es}</h6>
          <p
            style={{
              fontSize: "12px",
            }}
          >
            {place.place_name}
          </p>
          <button
            className={`btn btn-sm ${
              active === place.id ? "btn-outline-light" : "btn-outline-primary"
            }`}
            onClick={() => getRoute(place)}
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};
