import React, { useState } from 'react';
import * as S from './styles';
import Property from 'types/Property';
import { useNavigate } from 'react-router-dom';
import { PropertyType } from 'types/PropertyType';

const Hero: React.FC = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState<PropertyType | ''>('');
  const [price, setPrice] = useState('');
  const [properties, setProperties] = useState<Property[]>([]);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      navigate('/properties', {
        state: {
          searchQuery: location,
          filters: {
            type: propertyType,
            price: price ? parseFloat(price) : undefined,
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
              {/* Campo de Localização */}
              <S.SearchInput 
                type="text" 
                placeholder="Cidade, bairro ou região"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />

              {/* Select para Tipo de Imóvel */}
              <S.Select 
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value as PropertyType)}
              >
                <option value="">Todos os Tipos</option>
                <option value={PropertyType.HOUSE}>Casa</option>
                <option value={PropertyType.APARTMENT}>Apartamento</option>
                <option value={PropertyType.LAND}>Terreno</option>
                <option value={PropertyType.COMMERCIAL}>Comercial</option>
              </S.Select>

              {/* Campo de Preço com validação numérica */}
              <S.SearchInput 
                type="number"
                placeholder="Preço máximo (Ex: 500000)"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                min="0"
                step="1000"
              />

              <S.SearchButton type="submit">
                Buscar
              </S.SearchButton>
            </S.InputsContainer>
          </S.SearchContainer>
        </S.SearchForm>

        {/* Seção de resultados */}
        <S.ResultsContainer>
          {properties.map(property => (
            <S.PropertyCard key={property.id}>
              <h3>{property.title}</h3>
              <p>{property.description}</p>
              <S.Price>R$ {property.price.toLocaleString('pt-BR')}</S.Price>
            </S.PropertyCard>
          ))}
        </S.ResultsContainer>
      </S.HeroContent>
    </S.HeroSection>
  );
};

export default Hero;