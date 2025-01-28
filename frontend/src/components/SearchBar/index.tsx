import React, { useState } from 'react';
import { IoSearch, IoFilter } from 'react-icons/io5';
import {
  SearchContainer,
  SearchInput,
  SearchButton,
  FilterButton
} from './styles';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilterClick?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onFilterClick }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <SearchInput
        type="search"
        placeholder="Buscar imóveis..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchButton type="submit">
        <IoSearch />
      </SearchButton>
      <FilterButton type="button" onClick={onFilterClick}>
        <IoFilter />
        Filtros
      </FilterButton>
    </SearchContainer>
  );
};

export default SearchBar;
