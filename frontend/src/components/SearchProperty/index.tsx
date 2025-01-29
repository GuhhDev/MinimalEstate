import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Property from 'types/Property';
import { propertyService } from '@/services/propertyService';
import HeroSlider from '@/components/HeroSlider';
import PropertyCard from '@/components/PropertyCard';
import { Container } from '@/components/Container';
import { HomeContainer, PropertiesSection, PropertiesGrid } from './styles';

export default function SearchProperty() {
  
  const navigate = useNavigate();
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
  const [recentProperties, setRecentProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        setError(null);

        const [featured, recent] = await Promise.all([
          propertyService.getHighlightedProperties(),
          propertyService.getAll({ limit: 6 })
        ]);

        setFeaturedProperties(featured);
        setRecentProperties(recent);
      } catch (error) {
        console.error('Erro ao carregar imóveis:', error);
        setError('Não foi possível carregar os imóveis. Por favor, tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleSearch = (query: string) => {
    navigate('/properties', { state: { query } });
  };

  const handleFilter = (filters: any) => {
    navigate('/properties', { state: { filters } });
  };

  if (loading) {
    return (
      <HomeContainer>
        <Container>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            Carregando imóveis...
          </div>
        </Container>
      </HomeContainer>
    );
  }

  if (error) {
    return (
      <HomeContainer>
        <Container>
          <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>
            {error}
          </div>
        </Container>
      </HomeContainer>
    );
  }

  return (
    <HomeContainer>
      {featuredProperties.length > 0 && (
        <HeroSlider 
          properties={featuredProperties}
          onSearch={handleSearch}
          onFilter={handleFilter}
        />
      )}
      
      <PropertiesSection>
        <Container>
          <h2>Imóveis Recentes</h2>
          {recentProperties.length > 0 ? (
            <PropertiesGrid>
              {recentProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </PropertiesGrid>
          ) : (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              Nenhum imóvel encontrado.
            </div>
          )}
        </Container>
      </PropertiesSection>
    </HomeContainer>
  );
};
