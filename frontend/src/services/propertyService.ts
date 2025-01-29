import Property from "types/Property";
import { PropertyFilters } from "types/PropertyFilters";
import { api } from "./api";

class PropertyService {
  private baseUrl = '/api/properties';

  async getHighlightedProperties(): Promise<Property[]> {
    try {
      const response = await fetch(`${this.baseUrl}/featured`);
      if (!response.ok) {
        throw new Error('Falha ao buscar imóveis em destaque');
      }
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar imóveis em destaque:', error);
      return [];
    }
  }

  async searchProperties(query: string, filters?: any): Promise<Property[]> {
    try {
      const params = new URLSearchParams();
      if (query) {
        params.append('q', query);
      }
      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value) {
            params.append(key, String(value));
          }
        });
      }

      const response = await api.get(`${this.baseUrl}/search?${params.toString()}`);
      if (!response.data) {
        throw new Error('Falha ao buscar imóveis');
      }
      return await response.data;
    } catch (error) {
      console.error('Erro ao buscar imóveis:', error);
      return [];
    }
  }

  async getById(id: string): Promise<Property | null> {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`);
      if (!response.ok) {
        throw new Error('Falha ao buscar imóvel');
      }
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar imóvel:', error);
      return null;
    }
  }

  async getAll(filters?: PropertyFilters): Promise<Property[]> {
    try {
      const params = new URLSearchParams();
      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value !== undefined && value !== '') {
            if (key === 'precoMin' || key === 'precoMax' || key === 'quartos') {
              params.append(key, String(Number(value)));
            } else {
              params.append(key, String(value));
            }
          }
        });
      }
      const queryString = params.toString();
      const url = `${this.baseUrl}${queryString ? `?${queryString}` : ''}`;
      console.log('Buscando imóveis:', url); // Para debug
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Falha ao buscar imóveis');
      }
      const data = await response.json();
      console.log('Imóveis encontrados:', data); // Para debug
      return data;
    } catch (error) {
      console.error('Erro ao buscar imóveis:', error);
      return [];
    }
  }

  async create(property: Partial<Property>, images: File[]): Promise<Property | null> {
    try {
      const formData = new FormData();
      formData.append('property', JSON.stringify(property));
      images.forEach(image => {
        formData.append('images', image);
      });

      const response = await fetch(this.baseUrl, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Falha ao criar imóvel');
      }

      return await response.json();
    } catch (error) {
      console.error('Erro ao criar imóvel:', error);
      return null;
    }
  }
}

export const propertyService = new PropertyService();
