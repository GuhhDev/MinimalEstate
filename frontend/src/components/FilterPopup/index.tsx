import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { IoClose } from 'react-icons/io5';
import { PropertyType } from "types/PropertyType";
import {
  FilterContainer,
  FilterHeader,
  CloseButton,
  FilterForm,
  FilterGroup,
  Label,
  Input,
  Select,
  ButtonGroup,
  ApplyButton,
  ClearButton
} from './styles';

interface FilterPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: FilterState) => void;
  initialFilters?: FilterState;
}

interface FilterState {
  type: PropertyType | '';
  rooms: number;
  priceMin: string;
  priceMax: string;
}

const FilterPopup: React.FC<FilterPopupProps> = ({
  isOpen,
  onClose,
  onApply,
  initialFilters
}) => {
  const [filters, setFilters] = useState<FilterState>({
    type: initialFilters?.type || '',
    rooms: initialFilters?.rooms || 0,
    priceMin: initialFilters?.priceMin || '',
    priceMax: initialFilters?.priceMax || ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClear = () => {
    setFilters({
      type: '',
      rooms: 0,
      priceMin: '',
      priceMax: ''
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onApply(filters);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-30" />

        <FilterContainer>
          <FilterHeader>
            <h2>Filtros</h2>
            <CloseButton onClick={onClose}>
              <IoClose />
            </CloseButton>
          </FilterHeader>

          <FilterForm onSubmit={handleSubmit}>
            <FilterGroup>
              <Label htmlFor="tipo">Tipo de Imóvel</Label>
              <Select
                id="tipo"
                name="type"
                value={filters.type}
                onChange={handleChange}
              >
                <option value="">Todos</option>
                <option value={PropertyType.HOUSE}>Casa</option>
                <option value={PropertyType.APARTMENT}>Apartamento</option>
                <option value={PropertyType.LAND}>Terreno</option>
                <option value={PropertyType.COMMERCIAL}>Comercial</option>
              </Select>
            </FilterGroup>

            <FilterGroup>
              <Label htmlFor="quartos">Quartos</Label>
              <Select
                id="quartos"
                name="rooms"
                value={filters.rooms}
                onChange={handleChange}
              >
                <option value="">Qualquer</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </Select>
            </FilterGroup>

            <FilterGroup>
              <Label htmlFor="precoMin">Preço Mínimo</Label>
              <Input
                type="number"
                id="precoMin"
                name="priceMin"
                value={filters.priceMin}
                onChange={handleChange}
                placeholder="R$ 0,00"
              />
            </FilterGroup>

            <FilterGroup>
              <Label htmlFor="precoMax">Preço Máximo</Label>
              <Input
                type="number"
                id="precoMax"
                name="priceMax"
                value={filters.priceMax}
                onChange={handleChange}
                placeholder="R$ 999.999,99"
              />
            </FilterGroup>

            <ButtonGroup>
              <ClearButton type="button" onClick={handleClear}>
                Limpar
              </ClearButton>
              <ApplyButton type="submit">
                Aplicar
              </ApplyButton>
            </ButtonGroup>
          </FilterForm>
        </FilterContainer>
      </div>
    </Dialog>
  );
};

export default FilterPopup;
