import { ChangeEvent, useContext, useRef } from "react";
import { SearchResults } from ".";
import { PlacesContext } from "../context";

export const SearchBar = () => {
  //Debouncer Manual
  const debounceRef = useRef<NodeJS.Timeout>();
  const { searchPlacesByTerm } = useContext(PlacesContext);

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    //Se el debounceRef tiene un valor se limpia
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      //Ejecutar la petición
      // console.log("debounceRef value", value);
      searchPlacesByTerm(value);
    }, 550);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar..."
        onChange={onQueryChanged}
      />

      <SearchResults />
    </div>
  );
};
