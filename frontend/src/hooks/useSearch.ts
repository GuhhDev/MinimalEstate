import { useState, useEffect, useCallback } from 'react';
import { Property } from 'types/Property';
import { propertyService } from '@/services/propertyService';
import { PropertyType } from "types/PropertyType";

export interface SearchFilters {
  query?: string;
  type?: PropertyType | undefined;
  priceMin?: string;
  priceMax?: string;
  rooms?: string;
}

export const useSearch = (initialFilters: SearchFilters = {}) => {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [results, setResults] = useState<Property[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      if (filters.query) {
        const searchResults = await propertyService.searchProperties(filters.query);
        setResults(searchResults);
      } else {
        const filterResults = await propertyService.getAll({
          type: filters.type,
          priceMin: filters.priceMin ? Number(filters.priceMin) : undefined,
          priceMax: filters.priceMax ? Number(filters.priceMax) : undefined,
          rooms: filters.rooms ? Number(filters.rooms) : undefined  
        });
        setResults(filterResults);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao buscar imóveis');
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    search();
  }, [search]);

  return { filters, setFilters, results, loading, error, search };
};
