import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Input from '@/components/ui/Input';
import SearchDropdown from '@/components/SearchDropdown';
import { useSearch } from '@/hooks/useSearch';
import { SearchContainer } from './styles';

interface SearchProps {
  placeholder?: string;
  fullWidth?: boolean;
}

const Search: React.FC<SearchProps> = ({
  placeholder = 'Buscar imóveis...',
  fullWidth = false
}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const {
    query,
    setQuery,
    results,
    loading,
    error
  } = useSearch();

  // Fecha o dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsDropdownVisible(true);
  };

  const handleDropdownSelect = () => {
    setIsDropdownVisible(false);
    setQuery('');
  };

  return (
    <SearchContainer ref={searchRef}>
      <Input
        placeholder={placeholder}
        icon={<FaSearch />}
        value={query}
        onChange={handleInputChange}
        onFocus={() => setIsDropdownVisible(true)}
        fullWidth={fullWidth}
      />
      <SearchDropdown
        results={results}
        loading={loading}
        error={error}
        visible={isDropdownVisible}
        onSelect={handleDropdownSelect}
      />
    </SearchContainer>
  );
};

export default Search;
