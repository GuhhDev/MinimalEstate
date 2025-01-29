import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Property from 'types/Property';
import SearchDropdown from '@/components/SearchDropdown';
import { SearchContainer, SearchInput, SearchButton } from './styles';
import { IoSearch } from 'react-icons/io5';

interface SearchProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ placeholder = 'Buscar imóveis...', onSearch }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<Property[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleSearch = async (value: string) => {
    setSearchQuery(value);

    if (!value.trim()) {
      setResults([]);
      setIsDropdownVisible(false);
      return;
    }

    try {
      if (onSearch) {
        onSearch(value);
      }

      const response = await fetch(`/api/properties/search?q=${encodeURIComponent(value)}`);
      if (!response.ok) {
        throw new Error('Falha ao buscar imóveis');
      }
      const data = await response.json();
      setResults(data);
      setIsDropdownVisible(true);
    } catch (error) {
      console.error('Erro ao buscar imóveis:', error);
      setResults([]);
    }
  };

  const handleSelect = (property: Property) => {
    setIsDropdownVisible(false);
    navigate(`/properties/${property.id}`);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}
      />
      <SearchButton type="button" onClick={() => handleSearch(searchQuery)}>
        <IoSearch />
      </SearchButton>
      {isDropdownVisible && (
        <SearchDropdown
          properties={results}
          onSelect={handleSelect}
        />
      )}
    </SearchContainer>
  );
};

export default Search;
