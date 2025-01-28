import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Property } from 'types/Property';
import { Typography } from '@/components/Typography';
import { Container } from '@/components/Container';
import {
  PropertyContainer,
  ImageContainer,
  Content,
  Details
} from './styles';

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`/api/imoveis/${id}`);
        if (!response.ok) {
          throw new Error('Falha ao carregar o imóvel');
        }
        const data = await response.json();
        setProperty(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProperty();
    }
  }, [id]);

  if (loading) {
    return (
      <Container>
        <div>Carregando...</div>
      </Container>
    );
  }

  if (error || !property) {
    return (
      <Container>
        <div>Erro: {error || 'Imóvel não encontrado'}</div>
      </Container>
    );
  }

  return (
    <Container>
      <PropertyContainer>
        <ImageContainer>
          <img
            src={property.imageUrls?.[0] || '/images/property-placeholder.jpg'}
            alt={property.title}
          />
        </ImageContainer>
        <Content>
          <Typography variant="h1" as="h1">{property.title}</Typography>
          <Typography variant="body1" as="p">
            {property.type} • {property.bedrooms} quartos
          </Typography>
          <Typography variant="body1" as="p" className="price">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(property.price)}
          </Typography>
          <Details>
            <div className="detail-item">
              <Typography variant="h3" as="h3">Quartos</Typography>
              <Typography variant="body1" as="p">{property.bedrooms}</Typography>
            </div>
            <div className="detail-item">
              <Typography variant="h3" as="h3">Tipo</Typography>
              <Typography variant="body1" as="p">{property.type}</Typography>
            </div>
          </Details>
          <div>
            <Typography variant="h2" as="h2">Descrição</Typography>
            <Typography variant="body1" as="p">{property.description}</Typography>
          </div>
        </Content>
      </PropertyContainer>
    </Container>
  );
};

export default PropertyDetails;
