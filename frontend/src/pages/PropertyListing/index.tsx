import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PropertyType } from "types/PropertyType";
import { PropertyStatus } from "types/PropertyStatus";
import { Container } from '@/components/Container';
import { Typography } from '@/components/Typography';
import {
  ListingContainer,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  ImageUpload,
  SubmitButton,
  ErrorMessage
} from './styles';
import Property from 'types/Property';
import { propertyService } from 'services/propertyService';
import { validatePropertyForm } from 'utils/validations/validatePropertyForm';

interface PropertyForm extends Omit<Property, 'id' | 'images'> {}

  export default function PropertyListing() {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [property, setProperty] = useState<PropertyForm>({
    title: '',
    description: '',
    type: PropertyType.HOUSE,
    price: 0,
    area: 0,
    bedrooms: 0,
    bathrooms: 0,
    parkingSpaces: 0,
    location: {
      address: '',
      city: '',
      state: '',
      latitude: undefined,
      longitude: undefined
    },
    status: PropertyStatus.AVAILABLE,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name.startsWith('location.')) {
      const locationField = name.split('.')[1];
      setProperty(prev => ({
        ...prev,
        location: {
          ...prev.location,
          [locationField]: value
        }
      }));
    } else {
      setProperty(prev => ({
        ...prev,
        [name]: ['price', 'area', 'bedrooms', 'bathrooms', 'parkingSpaces'].includes(name)
          ? Math.max(0, Number(value))
          : value
      }));
    }
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImages(files);
      
      const urls = files.map(file => URL.createObjectURL(file));
      setPreviews(urls);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validatePropertyForm(property);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      await propertyService.create(property, images);
      
      setTimeout(() => {
        navigate('/properties');
      }, 100);
    } catch (error) {
      console.error('Erro ao cadastrar imóvel:', error);
      setErrors({
        general: 'Erro ao cadastrar imóvel. Verifique os dados e tente novamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <ListingContainer>
        <Typography variant="h1">Cadastrar Imóvel</Typography>
        <Form onSubmit={handleSubmit}>
          {errors.general && <ErrorMessage>{errors.general}</ErrorMessage>}

          <FormGroup>
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              type="text"
              name="title"
              value={property.title}
              onChange={handleChange}
              required
            />
            {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="description">Descrição</Label>
            <Input
              id="description"
              as="textarea"
              name="description"
              value={property.description}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="type">Tipo</Label>
            <Select 
              id="type" 
              name="type" 
              value={property.type} 
              onChange={handleChange} 
              required
            >
              {Object.values(PropertyType).map(type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="price">Preço</Label>
            <Input
              id="price"
              type="number"
              name="price"
              value={property.price}
              onChange={handleChange}
              min="0"
              required
            />
            {errors.price && <ErrorMessage>{errors.price}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="area">Área (m²)</Label>
            <Input
              id="area"
              type="number"
              name="area"
              value={property.area}
              onChange={handleChange}
              min="0"
              required
            />
            {errors.area && <ErrorMessage>{errors.area}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="bedrooms">Quartos</Label>
            <Input
              id="bedrooms"
              type="number"
              name="bedrooms"
              value={property.bedrooms}
              onChange={handleChange}
              min="0"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="bathrooms">Banheiros</Label>
            <Input
              id="bathrooms"
              type="number"
              name="bathrooms"
              value={property.bathrooms}
              onChange={handleChange}
              min="0"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="parkingSpaces">Vagas Garagem</Label>
            <Input
              id="parkingSpaces"
              type="number"
              name="parkingSpaces"
              value={property.parkingSpaces}
              onChange={handleChange}
              min="0"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="address">Endereço</Label>
            <Input
              id="address"
              type="text"
              name="location.address"
              value={property.location.address}
              onChange={handleChange}
              required
            />
            {errors['location.address'] && <ErrorMessage>{errors['location.address']}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="city">Cidade</Label>
            <Input
              id="city"
              type="text"
              name="location.city"
              value={property.location.city}
              onChange={handleChange}
              required
            />
            {errors['location.city'] && <ErrorMessage>{errors['location.city']}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="state">Estado</Label>
            <Input
              id="state"
              type="text"
              name="location.state"
              value={property.location.state}
              onChange={handleChange}
              required
            />
            {errors['location.state'] && <ErrorMessage>{errors['location.state']}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="images">Imagens</Label>
            <ImageUpload
              id="images"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
            {previews.length > 0 && (
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                {previews.map((src, index) => (
                  <img 
                    key={index} 
                    src={src} 
                    alt={`Preview ${index}`} 
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                ))}
              </div>
            )}
          </FormGroup>

          <SubmitButton type="submit">Cadastrar Imóvel</SubmitButton>
        </Form>
      </ListingContainer>
    </Container>
  );
};