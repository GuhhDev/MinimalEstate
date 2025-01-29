import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { propertyService } from '@/services/propertyService';
import { FilterState } from "types/FilterState";
import { PropertyFilters } from "types/PropertyFilters";
import PropertyCard from '@/components/PropertyCard';
import FilterPopup from '@/components/FilterPopup';
import Container from '@/components/ui/Container';
import Typography from '@/components/ui/Typography';
import { IoFilter } from 'react-icons/io5';
import {
  PropertiesGrid,
  SearchContainer,
  SearchInput,
  FilterButton,
  NoResults,
  PageContainer
} from './styles';
import Property from 'types/Property';

const Properties: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<PropertyFilters>({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const loadProperties = async (searchParams?: PropertyFilters, query?: string) => {
    setLoading(true);
    try {
      const results = await propertyService.searchProperties(query || '', searchParams);
      setProperties(results);
    } catch (error) {
      console.error('Erro ao carregar imóveis:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const state = location.state as { 
      searchQuery?: string; 
      filters?: PropertyFilters;
    };

    if (state?.searchQuery || state?.filters) {
      setSearchQuery(state.searchQuery || '');
      setFilters(state.filters || {});
      loadProperties(state.filters, state.searchQuery);
    } else {
      loadProperties({});
    }
  }, [location.state]);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    loadProperties(filters, searchQuery);
  };

  const handleFilterApply = (newFilters: FilterState) => {
    const filtrosPropriedade: PropertyFilters = {
      type: newFilters.type || undefined,
      priceMin: newFilters.priceMin ? Number(newFilters.priceMin) : undefined,
      priceMax: newFilters.priceMax ? Number(newFilters.priceMax) : undefined,
      rooms: newFilters.rooms ? Number(newFilters.rooms) : undefined,
    };
    setFilters(filtrosPropriedade);
    setIsFilterOpen(false);
    loadProperties(filtrosPropriedade, searchQuery);
  };

  return (
    <PageContainer>
      <Container>
        <Typography variant="h1" align="center" marginBottom="xl">
          Todos os Imóveis
        </Typography>

        <SearchContainer onSubmit={handleSearch}>
          <SearchInput
            type="text"
            placeholder="Buscar imóveis..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FilterButton type="button" onClick={() => setIsFilterOpen(true)}>
            <IoFilter size={24} />
            Filtros
          </FilterButton>
        </SearchContainer>

        {loading ? (
          <Typography variant="body1" align="center">
            Carregando imóveis...
          </Typography>
        ) : properties.length > 0 ? (
          <PropertiesGrid>
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </PropertiesGrid>
        ) : (
          <NoResults>
            <Typography variant="h3" align="center">
              Nenhum imóvel encontrado
            </Typography>
            <Typography variant="body1" align="center">
              Tente ajustar seus filtros de busca
            </Typography>
          </NoResults>
        )}

        <FilterPopup
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          onApply={handleFilterApply}
          initialFilters={{
            type: filters.type || '',
            rooms: (filters.rooms || 0),
            priceMin: filters.priceMin?.toString() || '',
            priceMax: filters.priceMax?.toString() || ''
          }}
        />
      </Container>
    </PageContainer>
  );
};

export default Properties;