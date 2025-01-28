import React from 'react';
import { Property } from 'types/Property';
import { formatCurrency } from '@/utils/format';
import {
  DropdownContainer,
  DropdownItem,
  PropertyTitle,
  PropertyInfo,
  NoResults
} from './styles';

interface SearchDropdownProps {
  properties: Property[];
  onSelect: (property: Property) => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({ properties, onSelect }) => {
  if (properties.length === 0) {
    return (
      <DropdownContainer>
        <NoResults>Nenhum imóvel encontrado</NoResults>
      </DropdownContainer>
    );
  }

  return (
    <DropdownContainer>
      {properties.map(property => (
        <DropdownItem
          key={property.id}
          onClick={() => onSelect(property)}
        >
          <PropertyTitle>{property.title}</PropertyTitle>
          <PropertyInfo>
            {property.type} • {formatCurrency(property.price)}
          </PropertyInfo>
        </DropdownItem>
      ))}
    </DropdownContainer>
  );
};

export default SearchDropdown;
