import { Feature } from "./Feature";
import { Location } from "./Location";
import { PropertyStatus } from "./PropertyStatus";
import { PropertyType } from "./PropertyType";

export interface Property {
  id?: string;
  title: string;
  description: string;
  type: PropertyType;
  price: number;
  area: number;
  bedrooms?: number;
  bathrooms?: number;
  parkingSpaces?: number;
  location: Location;
  features?: Feature[];
  imageUrls?: string[];
  status: PropertyStatus;
  createdAt?: string;
  updatedAt?: string;
}
