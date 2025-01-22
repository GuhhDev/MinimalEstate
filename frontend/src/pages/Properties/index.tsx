import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { propertyService, Property } from '@/services/propertyService';
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Container from '@/components/ui/Container';
import Loading from '@/components/Loading';
import { FaSearch, FaBed, FaBath, FaRuler, FaFilter } from 'react-icons/fa';
import { PropertiesGrid, FiltersContainer } from './styles';

interface Filters {
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  type: string;
}

const Properties: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<Filters>({
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    type: ''
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    try {
      setLoading(true);
      const data = await propertyService.getAll();
      setProperties(data);
    } catch (error) {
      console.error('Erro ao carregar imóveis:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePropertyClick = (id: number) => {
    navigate(`/imoveis/${id}`);
  };

  return (
    <>
      <Typography variant="h1" align="center" color="primary">
        Nossos Imóveis
      </Typography>
      
      <Typography 
        variant="subtitle" 
        align="center" 
        color="secondary"
        style={{ marginTop: '1rem', marginBottom: '2rem' }}
      >
        Encontre o imóvel perfeito para você
      </Typography>

      <FiltersContainer>
        <Input
          placeholder="Buscar por localização..."
          icon={<FaSearch />}
          fullWidth
        />
        <Input
          placeholder="Preço mínimo"
          type="number"
          value={filters.minPrice}
          onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
        />
        <Input
          placeholder="Preço máximo"
          type="number"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
        />
        <Input
          placeholder="Quartos"
          type="number"
          value={filters.bedrooms}
          onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
        />
        <Button variant="outline" icon={<FaFilter />}>
          Mais Filtros
        </Button>
      </FiltersContainer>

      {loading ? (
        <Loading />
      ) : (
        <PropertiesGrid>
          {properties.map((property) => (
            <Card 
              key={property.id}
              hoverable
              clickable
              onClick={() => handlePropertyClick(property.id)}
            >
              <img 
                src={property.imageUrl || '/images/property-placeholder.jpg'} 
                alt={property.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <Card.Content>
                <Typography variant="h4" color="primary">
                  {property.title}
                </Typography>
                
                <Typography variant="body2" color="secondary" style={{ marginTop: '0.5rem' }}>
                  {property.location}
                </Typography>

                <div style={{ display: 'flex', gap: '1rem', margin: '1rem 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FaBed />
                    <Typography variant="body2">
                      {property.bedrooms} quartos
                    </Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FaBath />
                    <Typography variant="body2">
                      {property.bathrooms} banheiros
                    </Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FaRuler />
                    <Typography variant="body2">
                      {property.area}m²
                    </Typography>
                  </div>
                </div>

                <Typography 
                  variant="h4" 
                  color="accent" 
                  weight="bold"
                  style={{ marginTop: '1rem' }}
                >
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(property.price)}
                </Typography>
              </Card.Content>
            </Card>
          ))}
        </PropertiesGrid>
      )}
    </>
  );
};

export default Properties;
