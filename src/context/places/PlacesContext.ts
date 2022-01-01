import { createContext } from "react";
//Lo que se expone a los demás componentes



export interface PlacesContextProps{
    isLoading: boolean;
    userLocation?: [number, number];
}


export const PlacesContext = createContext({} as PlacesContextProps);