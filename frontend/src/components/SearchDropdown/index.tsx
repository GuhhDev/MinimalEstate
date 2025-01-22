import React from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@/components/ui/Typography';
import { Property } from '@/services/propertyService';
import { FaBed, FaBath, FaMapMarkerAlt } from 'react-icons/fa';
import {
  DropdownContainer,
  ResultItem,
  ResultImage,
  ResultContent,
  IconText,
  Price,
  NoResults,
  LoadingText
} from './styles';

interface SearchDropdownProps {
  results: Property[];
  loading: boolean;
  error: string | null;
  visible: boolean;
  onSelect: () => void;
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

const SearchDropdown: React.FC<SearchDropdownProps> = ({
  results,
  loading,
  error,
  visible,
  onSelect
}) => {
  const navigate = useNavigate();

  if (!visible) return null;

  const handleSelect = (id: number) => {
    navigate(`/imoveis/${id}`);
    onSelect();
  };

  if (loading) {
    return (
      <DropdownContainer>
        <LoadingText>
          <Typography variant="body2" color="secondary">
            Buscando imóveis...
          </Typography>
        </LoadingText>
      </DropdownContainer>
    );
  }

  if (error) {
    return (
      <DropdownContainer>
        <NoResults>
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        </NoResults>
      </DropdownContainer>
    );
  }

  if (results.length === 0) {
    return (
      <DropdownContainer>
        <NoResults>
          <Typography variant="body2" color="secondary">
            Nenhum imóvel encontrado
          </Typography>
        </NoResults>
      </DropdownContainer>
    );
  }

  return (
    <DropdownContainer>
      {results.map((property) => (
        <ResultItem
          key={property.id}
          onClick={() => handleSelect(property.id)}
        >
          <ResultImage>
            <img
              src={property.imageUrl || '/images/property-placeholder.jpg'}
              alt={property.title}
            />
          </ResultImage>
          <ResultContent>
            <Typography variant="body1" color="primary">
              {property.title}
            </Typography>
            <Typography variant="body2" color="secondary">
              <IconText>
                <FaMapMarkerAlt />
                {property.location}
              </IconText>
            </Typography>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <IconText>
                <FaBed />
                <Typography variant="body2" color="secondary">
                  {property.bedrooms} quartos
                </Typography>
              </IconText>
              <IconText>
                <FaBath />
                <Typography variant="body2" color="secondary">
                  {property.bathrooms} banheiros
                </Typography>
              </IconText>
            </div>
            <Price>
              <Typography variant="body1" color="accent" weight="bold">
                {formatCurrency(property.price)}
              </Typography>
            </Price>
          </ResultContent>
        </ResultItem>
      ))}
    </DropdownContainer>
  );
};

export default SearchDropdown;
