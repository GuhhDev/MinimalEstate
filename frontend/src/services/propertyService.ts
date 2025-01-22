import { api } from './api';

export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  imageUrl: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  parkingSpaces: number;
  featured?: boolean;
}

export interface PropertyFilters {
  minPrice?: number;
  maxPrice?: number;
  minArea?: number;
  maxArea?: number;
  bedrooms?: number;
  bathrooms?: number;
  location?: string;
  type?: string;
  featured?: boolean;
}

export const propertyService = {
  getAll: async (filters?: PropertyFilters) => {
    const response = await api.get<Property[]>('/properties', {
      params: filters
    });
    return response.data;
  },

  getById: async (id: number) => {
    const response = await api.get<Property>(`/properties/${id}`);
    return response.data;
  },

  create: async (property: Omit<Property, 'id'>) => {
    const response = await api.post<Property>('/properties', property);
    return response.data;
  },

  update: async (id: number, property: Partial<Property>) => {
    const response = await api.put<Property>(`/properties/${id}`, property);
    return response.data;
  },

  delete: async (id: number) => {
    await api.delete(`/properties/${id}`);
  },

  search: async (query: string) => {
    const response = await api.get<Property[]>('/properties/search', {
      params: { query }
    });
    return response.data;
  },

  getFeatured: async () => {
    const response = await api.get<Property[]>('/properties/featured');
    return response.data;
  },

  getRecommended: async (id: number) => {
    const response = await api.get<Property[]>(`/properties/${id}/recommended`);
    return response.data;
  }
};
