import React, { useState } from 'react';
import * as S from './styles';
import Property from 'types/Property';
import { api } from 'services/api';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [properties, setProperties] = useState<Property[]>([]);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      navigate('/properties', {
        state: {
          searchQuery: location, // Ou outro valor de busca
          filters: {
            type: propertyType, // Tipo de imóvel
            priceMax: priceRange ? parseFloat(priceRange) : undefined, // Faixa de preço
          },
        },
      });
    } catch (error) {
      console.error('Erro ao buscar propriedades:', error);
    }
  };

  return (
    <S.HeroSection>
      <S.HeroContent>
        <S.Title>Encontre o Imóvel dos Seus Sonhos</S.Title>
        <S.Subtitle>As melhores ofertas em um só lugar</S.Subtitle>
        <S.SearchForm onSubmit={handleSubmit}>
          <S.SearchContainer>
            <S.InputsContainer>
              <S.SearchInput 
                type="text" 
                placeholder="Localização"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <S.SearchInput 
                type="text" 
                placeholder="Tipo de Imóvel"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              />
              <S.SearchInput 
                type="text" 
                placeholder="Faixa de Preço"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              />
              <S.SearchButton type="submit">
                Buscar
              </S.SearchButton>
            </S.InputsContainer>
          </S.SearchContainer>
        </S.SearchForm>
        {/* Exibir os resultados da busca */}
        <div>
          {properties.map(property => (
            <div key={property.id}>
              <h3>{property.title}</h3>
              <p>{property.description}</p>
              <p>Preço: {property.price}</p>
              {/* Adicione mais detalhes conforme necessário */}
            </div>
          ))}
        </div>
      </S.HeroContent>
    </S.HeroSection>
  );
};

export default Hero;