import React from 'react';
import { IoClose } from 'react-icons/io5';
import {
  FilterContainer,
  FilterForm,
  FilterGroup,
  Label,
  Input,
  Select,
  ButtonGroup,
  ApplyButton,
  ClearButton,
} from './styles';

interface FilterPopupProps {
  onApply: (filters: any) => void;
  initialFilters?: any;
}

const FilterPopup: React.FC<FilterPopupProps> = ({
  onApply,
  initialFilters,
}) => {
  const [filters, setFilters] = React.useState(initialFilters || {});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => {
    setFilters({});
    onApply({}); // Aplica filtros vazios imediatamente
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onApply(filters);
  };

  return (
    <FilterContainer>
      <FilterForm onSubmit={handleSubmit}>
        <div className="filter-grid">
          <FilterGroup>
            <Label>Tipo de Imóvel</Label>
            <Select 
              name="type" 
              value={filters.type || ''} 
              onChange={handleChange}
            >
              <option value="">Todos</option>
              <option value="HOUSE">Casa</option>
              <option value="APARTMENT">Apartamento</option>
              <option value="LAND">Terreno</option>
              <option value="COMMERCIAL">Comercial</option>
            </Select>
          </FilterGroup>

          <FilterGroup>
            <Label>Preço Mínimo</Label>
            <Input
              type="number"
              name="priceMin"
              value={filters.priceMin || ''}
              onChange={handleChange}
              placeholder="R$ 0,00"
            />
          </FilterGroup>

          <FilterGroup>
            <Label>Preço Máximo</Label>
            <Input
              type="number"
              name="priceMax"
              value={filters.priceMax || ''}
              onChange={handleChange}
              placeholder="R$ 999.999,99"
            />
          </FilterGroup>
        </div>

        <ButtonGroup>
          <ClearButton type="button" onClick={handleClear}>
            Limpar Filtros
          </ClearButton>
          <ApplyButton type="submit">
            Aplicar Filtros
          </ApplyButton>
        </ButtonGroup>
      </FilterForm>
    </FilterContainer>
  );
};

export default FilterPopup;