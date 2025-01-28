import { PropertyType } from "./PropertyType";


export interface PropertyFilters {
  type?: PropertyType;
  priceMin?: number;
  priceMax?: number;
  rooms?: number;
  limit?: number;
}
