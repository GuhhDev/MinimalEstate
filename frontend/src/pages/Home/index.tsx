import React, { useEffect, useState } from 'react';
import Typography from '@/components/ui/Typography';
import { HomeContainer, PropertiesSection, PropertiesGrid } from './styles';
import Container from '@/components/ui/Container';
import PropertyCard from '@/components/PropertyCard';
import HeroSlider from '@/components/HeroSlider';
import { Property, propertyService } from '@/services/propertyService';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedProperties = async () => {
      try {
        const properties = await propertyService.getFeatured();
        setFeaturedProperties(properties);
      } catch (error) {
        console.error('Erro ao carregar imóveis em destaque:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedProperties();
  }, []);

  return (
    <HomeContainer>
      <HeroSlider properties={featuredProperties.slice(0, 5)} loading={loading} />

      <PropertiesSection>
        <Container>
          <Typography variant="h2" color="primary" align="center">
            Imóveis em Destaque
          </Typography>
          <Typography 
            variant="subtitle" 
            color="secondary" 
            align="center"
            style={{ marginBottom: '2rem' }}
          >
            Confira nossa seleção de imóveis mais populares
          </Typography>

          <PropertiesGrid>
            {loading ? (
              <Typography variant="body1" color="secondary" align="center">
                Carregando imóveis...
              </Typography>
            ) : featuredProperties.length > 0 ? (
              featuredProperties.map((property) => (
                <PropertyCard 
                  key={property.id}
                  property={property}
                />
              ))
            ) : (
              <Typography variant="body1" color="secondary" align="center">
                Nenhum imóvel em destaque encontrado
              </Typography>
            )}
          </PropertiesGrid>
        </Container>
      </PropertiesSection>
    </HomeContainer>
  );
};

export default Home;
