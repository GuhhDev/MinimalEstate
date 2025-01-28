import React, { useState } from 'react';
import {
  HeroSection,
  HeroContent,
  Title,
  Subtitle,
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchForm,
  InputsContainer
} from './styles';

const Hero: React.FC = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      location,
      propertyType,
      priceRange
    });
  };

  return (
    <HeroSection>
      <HeroContent>
        <Title>Encontre o Imóvel dos Seus Sonhos</Title>
        <Subtitle>As melhores ofertas em um só lugar</Subtitle>
        <SearchForm onSubmit={handleSubmit}>
          <SearchContainer>
            <InputsContainer>
              <SearchInput 
                type="text" 
                placeholder="Localização"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <SearchInput 
                type="text" 
                placeholder="Tipo de Imóvel"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              />
              <SearchInput 
                type="text" 
                placeholder="Faixa de Preço"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              />
              <SearchButton type="submit">
                Buscar
              </SearchButton>
            </InputsContainer>
          </SearchContainer>
        </SearchForm>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;