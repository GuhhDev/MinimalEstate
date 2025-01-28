import { PropertyType } from "./PropertyType";


export interface FilterState {
  type: PropertyType | '';
  rooms: number;
  priceMin: string;
  priceMax: string;
}
