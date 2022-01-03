import { createContext } from "react";
import { Feature, PlacesResponse } from '../../interfaces/places';
//Lo que se expone a los demás componentes



export interface PlacesContextProps{
    isLoading: boolean;
    userLocation?: [number, number];
    //Methods
    searchPlacesByTerm: (query: string) => Promise<Feature[]>
}


export const PlacesContext = createContext({} as PlacesContextProps);