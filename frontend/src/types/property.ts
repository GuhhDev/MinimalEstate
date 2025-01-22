export enum PropertyType {
  HOUSE = 'Casa',
  APARTMENT = 'Apartamento',
  COMMERCIAL = 'Comercial',
  LAND = 'Terreno',
  FARM = 'Fazenda',
  PENTHOUSE = 'Cobertura'
}

export enum PropertyStatus {
  AVAILABLE = 'Disponível',
  SOLD = 'Vendido',
  RENTED = 'Alugado',
  RESERVED = 'Reservado'
}

export enum Feature {
  POOL = 'Piscina',
  GYM = 'Academia',
  GARAGE = 'Garagem',
  GARDEN = 'Jardim',
  SECURITY = 'Segurança 24h',
  BALCONY = 'Varanda',
  FURNISHED = 'Mobiliado',
  AIR_CONDITIONING = 'Ar Condicionado',
  ELEVATOR = 'Elevador',
  GOURMET_AREA = 'Área Gourmet',
  PLAYGROUND = 'Playground',
  PARTY_ROOM = 'Salão de Festas',
  LAUNDRY = 'Lavanderia',
  PETS_ALLOWED = 'Aceita Pets'
}

export interface Location {
  address: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

export interface PropertyImage {
  id: number;
  url: string;
  alt: string;
  featured: boolean;
}

export interface Property {
  id: number;
  title: string;
  description: string;
  type: PropertyType;
  price: number;
  area: number;
  bedrooms?: number;
  bathrooms?: number;
  features: Feature[];
  location: Location;
  images: PropertyImage[];
  status: PropertyStatus;
  createdAt: string;
  updatedAt: string;
}

export interface PropertyFilter {
  query?: string;
  type?: PropertyType;
  minPrice?: number;
  maxPrice?: number;
  minArea?: number;
  maxArea?: number;
  minBedrooms?: number;
  minBathrooms?: number;
  features?: Feature[];
  city?: string;
  state?: string;
}
