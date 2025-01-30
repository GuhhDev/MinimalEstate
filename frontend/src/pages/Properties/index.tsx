import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { propertyService } from '@/services/propertyService';
import { PropertyFilters } from "types/PropertyFilters";
import FilterPopup from '@/components/FilterPopup';
import Container from '@/components/ui/Container';
import Typography from '@/components/ui/Typography';
import { Address, Description, Features, FiltersContainer, PageContainer, Price, PropertiesGrid, PropertyDetails, PropertyImage, PropertyRow } from './styles';
import Property from 'types/Property';
import { FilterState } from 'types/FilterState';
import { Button } from '@mui/material';
import { NoResults } from 'components/SearchDropdown/styles';

const Properties: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<PropertyFilters>({});

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

    loadProperties(state?.filters || {}, state?.searchQuery || '');
    setSearchQuery(state?.searchQuery || '');
    setFilters(state?.filters || {});
  }, [location.state]);

  const handleFilterApply = (newFilters: FilterState) => {
    const apiFilters: PropertyFilters = {
      type: newFilters.type || undefined,
      rooms: newFilters.rooms || undefined,
      priceMin: newFilters.priceMin ? Number(newFilters.priceMin) : undefined,
      priceMax: newFilters.priceMax ? Number(newFilters.priceMax) : undefined,
    };
  
    setFilters(apiFilters);
    loadProperties(apiFilters, searchQuery);
  };

  return (
    <PageContainer>
      <Container>
        <Typography variant="h1" align="center" marginBottom="xl">
          Todos os Imóveis
        </Typography>

        <FiltersContainer>
          <FilterPopup 
            onApply={handleFilterApply}
            initialFilters={filters}
          />
        </FiltersContainer>

        {loading ? (
          <Typography variant="body1" align="center">
            Carregando imóveis...
          </Typography>
        ) : properties.length > 0 ? (
          <PropertiesGrid>
            {properties.map((property) => (
              <PropertyRow key={property.id}>
                <PropertyImage 
                  src={`casa1.jpg`} 
                  alt={`Imagem do imóvel ${property.title}`} 
                />
                <PropertyDetails>
                  <div>
                    <Price>R$ {property.price.toLocaleString('pt-BR')}</Price>
                    <Address>{property.location.address}</Address>
                    <Features>
                      <div>
                        <i className="fas fa-bed"></i>
                        {property.bedrooms} Quartos
                      </div>
                      <div>
                        <i className="fas fa-bath"></i>
                        {property.bathrooms} Banheiros
                      </div>
                      <div>
                        <i className="fas fa-car"></i>
                        {property.bathrooms} Vagas
                      </div>
                    </Features>
                    <Description>{property.description}</Description>
                  </div>
                  <Button>
                    Ver Detalhes
                  </Button>
                </PropertyDetails>
              </PropertyRow>
            ))}
          </PropertiesGrid>
        ) : (
          <NoResults>
            <Typography variant="h3" align="center">
              Nenhum imóvel encontrado
            </Typography>
          </NoResults>
        )}
      </Container>
    </PageContainer>
  );
};

export default Properties;