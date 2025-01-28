import React from 'react';
import { Link } from 'react-router-dom';
import { Property } from 'types/Property';
import { FaBed } from 'react-icons/fa';
import {
  CardContainer,
  ImageContainer,
  Image,
  Content,
  PropertyInfo,
  Title,
  Features
} from './styles';

interface PropertyCardProps {
  property: Property;
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <CardContainer as={Link} to={`/imoveis/${property.id}`}>
      <ImageContainer>
        <Image
          src={property.imageUrls?.[0] || '/images/property-placeholder.jpg'}
          alt={property.title}
        />
      </ImageContainer>
      <Content>
        <PropertyInfo>
          <Title>{property.title}</Title>
          <Features>
            <FaBed /> {property.bedrooms} quartos | {property.price ? formatCurrency(property.price) : 'Preço não informado'}
          </Features>
        </PropertyInfo>
      </Content>
    </CardContainer>
  );
};

export default PropertyCard;
