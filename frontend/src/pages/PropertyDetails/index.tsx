import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { propertyService, Property } from '../../services/propertyService';

const Container = styled.div`
  padding: 80px 20px 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const PropertyContainer = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 30px;

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 20px;
  }

  .price {
    color: ${({ theme }) => theme.colors.accent};
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0;
  }
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
  padding: 20px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;

  .detail-item {
    text-align: center;
    
    h3 {
      color: ${({ theme }) => theme.colors.secondary};
      margin-bottom: 5px;
    }
    
    p {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 18px;
    }
  }
`;

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    const loadProperty = async () => {
      if (id) {
        try {
          const data = await propertyService.getById(Number(id));
          setProperty(data);
        } catch (error) {
          console.error('Erro ao carregar detalhes do imóvel:', error);
        }
      }
    };

    loadProperty();
  }, [id]);

  if (!property) {
    return (
      <>
        <Header />
        <Container>
          <p>Carregando...</p>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Container>
        <PropertyContainer>
          <ImageContainer>
            <img
              src={property.imageUrl || '/images/property-placeholder.jpg'}
              alt={property.title}
            />
          </ImageContainer>
          <Content>
            <h1>{property.title}</h1>
            <p>{property.location}</p>
            <p className="price">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(property.price)}
            </p>
            <Details>
              <div className="detail-item">
                <h3>Área</h3>
                <p>{property.area} m²</p>
              </div>
              <div className="detail-item">
                <h3>Quartos</h3>
                <p>{property.bedrooms}</p>
              </div>
              <div className="detail-item">
                <h3>Banheiros</h3>
                <p>{property.bathrooms}</p>
              </div>
              <div className="detail-item">
                <h3>Vagas</h3>
                <p>{property.parkingSpaces}</p>
              </div>
            </Details>
            <div>
              <h2>Descrição</h2>
              <p>{property.description}</p>
            </div>
          </Content>
        </PropertyContainer>
      </Container>
    </>
  );
};

export default PropertyDetails;
