import { PropertyType } from "./PropertyType";


export interface FilterState {
  type: PropertyType | '';
  priceMin: string;
  priceMax: string;
  rooms: number;
}
