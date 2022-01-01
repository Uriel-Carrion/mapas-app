import { PlacesProvider } from "./context/places/PlacesProvider";
import { HomeScreen } from "./screens";
import "./styles.css";

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <HomeScreen />
    </PlacesProvider>
  );
};
