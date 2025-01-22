import React from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@/components/ui/Typography';
import Card from '@/components/ui/Card';
import { FaMapMarkerAlt, FaBed, FaBath } from 'react-icons/fa';
import { IconText, PropertyInfo } from './styles';
import { PropertyCardProps } from './types';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/imoveis/${property.id}`);
  };

  return (
    <Card hoverable clickable onClick={handleClick}>
      <img 
        src={property.imageUrl || '/images/property-placeholder.jpg'} 
        alt={property.title} 
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <Card.Content>
        <Typography variant="h4" color="primary">
          {property.title}
        </Typography>
        
        <IconText>
          <FaMapMarkerAlt />
          <Typography variant="body2" color="secondary">
            {property.location}
          </Typography>
        </IconText>
        
        <PropertyInfo>
          <IconText>
            <FaBed />
            <Typography variant="body2">
              {property.bedrooms} quartos
            </Typography>
          </IconText>
          <IconText>
            <FaBath />
            <Typography variant="body2">
              {property.bathrooms} banheiros
            </Typography>
          </IconText>
        </PropertyInfo>
        
        <Typography 
          variant="h4" 
          color="accent" 
          weight="bold"
          style={{ marginTop: '8px' }}
        >
          {formatCurrency(property.price)}
        </Typography>
      </Card.Content>
    </Card>
  );
};

export default PropertyCard;
