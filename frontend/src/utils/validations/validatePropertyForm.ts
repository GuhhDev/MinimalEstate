import PropertyForm from '@/types/Property';

export const validatePropertyForm = (property: PropertyForm): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!property.title.trim()) {
    errors.title = 'Título é obrigatório';
  }

  if (property.price <= 0) {
    errors.price = 'Preço deve ser positivo';
  }

  if (property.area <= 0) {
    errors.area = 'Área deve ser positiva';
  }

  if (!property.location.address.trim()) {
    errors['location.address'] = 'Endereço é obrigatório';
  }

  if (!property.location.city.trim()) {
    errors['location.city'] = 'Cidade é obrigatória';
  }

  if (!property.location.state.trim()) {
    errors['location.state'] = 'Estado é obrigatório';
  }

  return errors;
};