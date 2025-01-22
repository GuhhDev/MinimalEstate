import React, { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { PropertyType, Feature } from '../../types/property';
import * as S from './styles';

interface FilterPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: Record<string, any>) => void;
  initialFilters?: Record<string, any>;
}

const FilterPopup: React.FC<FilterPopupProps> = ({
  isOpen,
  onClose,
  onApplyFilters,
  initialFilters = {}
}) => {
  const [filters, setFilters] = useState<Record<string, any>>(initialFilters);
  const [cities, setCities] = useState<string[]>([]);
  const [states, setStates] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
  const [areaRange, setAreaRange] = useState<[number, number]>([0, 1000]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [citiesRes, statesRes, rangesRes] = await Promise.all([
          fetch('/api/properties/cities'),
          fetch('/api/properties/states'),
          fetch('/api/properties/ranges')
        ]);

        const citiesData = await citiesRes.json();
        const statesData = await statesRes.json();
        const rangesData = await rangesRes.json();

        setCities(citiesData);
        setStates(statesData);
        setPriceRange(rangesData.price || [0, 1000000]);
        setAreaRange(rangesData.area || [0, 1000]);
      } catch (error) {
        console.error('Erro ao carregar dados dos filtros:', error);
      }
    };

    if (isOpen) {
      fetchData();
    }
  }, [isOpen]);

  const handleChange = (field: string, value: any) => {
    setFilters((prev: Record<string, any>) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleClear = () => {
    setFilters({});
  };

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.Container onClick={e => e.stopPropagation()}>
        <S.Header>
          <h2>Filtros</h2>
          <button onClick={onClose}>
            <IoClose />
          </button>
        </S.Header>

        <S.FilterSection>
          <h3>Tipo de Imóvel</h3>
          <select
            value={filters.type || ''}
            onChange={e => handleChange('type', e.target.value)}
          >
            <option value="">Todos</option>
            {Object.values(PropertyType).map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </S.FilterSection>

        <S.FilterSection>
          <h3>Preço</h3>
          <S.RangeInputs>
            <input
              type="number"
              placeholder="Mínimo"
              value={filters.minPrice || ''}
              onChange={e => handleChange('minPrice', Number(e.target.value))}
              min={priceRange[0]}
              max={priceRange[1]}
            />
            <input
              type="number"
              placeholder="Máximo"
              value={filters.maxPrice || ''}
              onChange={e => handleChange('maxPrice', Number(e.target.value))}
              min={priceRange[0]}
              max={priceRange[1]}
            />
          </S.RangeInputs>
        </S.FilterSection>

        <S.FilterSection>
          <h3>Área (m²)</h3>
          <S.RangeInputs>
            <input
              type="number"
              placeholder="Mínimo"
              value={filters.minArea || ''}
              onChange={e => handleChange('minArea', Number(e.target.value))}
              min={areaRange[0]}
              max={areaRange[1]}
            />
            <input
              type="number"
              placeholder="Máximo"
              value={filters.maxArea || ''}
              onChange={e => handleChange('maxArea', Number(e.target.value))}
              min={areaRange[0]}
              max={areaRange[1]}
            />
          </S.RangeInputs>
        </S.FilterSection>

        <S.FilterSection>
          <h3>Quartos</h3>
          <input
            type="number"
            placeholder="Mínimo de quartos"
            value={filters.minBedrooms || ''}
            onChange={e => handleChange('minBedrooms', Number(e.target.value))}
            min={0}
          />
        </S.FilterSection>

        <S.FilterSection>
          <h3>Banheiros</h3>
          <input
            type="number"
            placeholder="Mínimo de banheiros"
            value={filters.minBathrooms || ''}
            onChange={e => handleChange('minBathrooms', Number(e.target.value))}
            min={0}
          />
        </S.FilterSection>

        <S.FilterSection>
          <h3>Localização</h3>
          <select
            value={filters.state || ''}
            onChange={e => handleChange('state', e.target.value)}
          >
            <option value="">Estado</option>
            {states.map(state => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <select
            value={filters.city || ''}
            onChange={e => handleChange('city', e.target.value)}
          >
            <option value="">Cidade</option>
            {cities.map(city => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </S.FilterSection>

        <S.FilterSection>
          <h3>Características</h3>
          <S.FeatureGrid>
            {Object.values(Feature).map(feature => (
              <label key={feature}>
                <input
                  type="checkbox"
                  checked={filters.features?.includes(feature) || false}
                  onChange={e => {
                    const features = new Set(filters.features || []);
                    if (e.target.checked) {
                      features.add(feature);
                    } else {
                      features.delete(feature);
                    }
                    handleChange('features', Array.from(features));
                  }}
                />
                {feature}
              </label>
            ))}
          </S.FeatureGrid>
        </S.FilterSection>

        <S.ButtonGroup>
          <button className="clear" onClick={handleClear}>
            Limpar
          </button>
          <button className="apply" onClick={handleApply}>
            Aplicar Filtros
          </button>
        </S.ButtonGroup>
      </S.Container>
    </S.Overlay>
  );
};

export default FilterPopup;
