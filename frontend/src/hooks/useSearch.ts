import { useState, useEffect, useCallback } from 'react';
import { Property, propertyService } from '@/services/propertyService';

export interface SearchFilters {
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  location?: string;
  type?: string;
  featured?: boolean;
}

export const useSearch = (initialFilters: SearchFilters = {}) => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [results, setResults] = useState<Property[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchProperties = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Se tiver query, usa a busca por texto
      if (query.trim()) {
        const searchResults = await propertyService.search(query);
        setResults(searchResults);
        return;
      }

      // Se não tiver query, usa os filtros
      const filterResults = await propertyService.getAll({
        ...filters,
        minPrice: filters.minPrice ? Number(filters.minPrice) : undefined,
        maxPrice: filters.maxPrice ? Number(filters.maxPrice) : undefined,
        bedrooms: filters.bedrooms ? Number(filters.bedrooms) : undefined,
      });
      setResults(filterResults);
    } catch (err) {
      setError('Erro ao buscar imóveis. Tente novamente.');
      console.error('Erro na busca:', err);
    } finally {
      setLoading(false);
    }
  }, [query, filters]);

  // Debounce para a busca
  useEffect(() => {
    const timer = setTimeout(() => {
      searchProperties();
    }, 500); // Aguarda 500ms após a última alteração

    return () => clearTimeout(timer);
  }, [searchProperties]);

  const updateFilters = (newFilters: Partial<SearchFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({});
    setQuery('');
  };

  return {
    query,
    setQuery,
    filters,
    updateFilters,
    clearFilters,
    results,
    loading,
    error
  };
};
