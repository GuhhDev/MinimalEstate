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
  SubmitButton
} from './styles';
import Property from 'types/Property';

interface PropertyForm extends Omit<Property, 'id' | 'images'> {}

const PropertyListing: React.FC = () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'location') {
      setProperty(prev => ({
        ...prev,
        location: {
          ...prev.location,
          address: value,
        }
      }));
    } else {
      setProperty(prev => ({
        ...prev,
        [name]: name === 'price' || name === 'area' || name === 'bedrooms' || name === 'bathrooms' || name === 'parkingSpaces'
          ? Number(value)
          : value
      }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const propertyDTO = {
        ...property,
        price: property.price.toString(),
        area: property.area.toString(),
        location: {
          address: property.location.address,
          city: property.location.city,
          state: property.location.state
        }
      };

      const formData = new FormData();
      formData.append('property', JSON.stringify(propertyDTO));
      images.forEach(image => {
        formData.append('images', image);
      });

      const response = await fetch('http://localhost:8092/api/properties', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Error creating property');
      }

      navigate('/properties');
    } catch (error) {
      console.error('Error creating property:', error);
    }
  };

  return (
    <Container>
      <ListingContainer>
        <Typography variant="h1">Cadastrar Imóvel</Typography>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Título</Label>
            <Input
              type="text"
              name="title"
              value={property.title}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Description</Label>
            <Input
              as="textarea"
              name="description"
              value={property.description}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Type</Label>
            <Select name="type" value={property.type} onChange={handleChange} required>
              {Object.values(PropertyType).map(type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Price</Label>
            <Input
              type="number"
              name="price"
              value={property.price}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Area</Label>
            <Input
              type="number"
              name="area"
              value={property.area}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Bedrooms</Label>
            <Input
              type="number"
              name="bedrooms"
              value={property.bedrooms}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Bathrooms</Label>
            <Input
              type="number"
              name="bathrooms"
              value={property.bathrooms}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Parking Spaces</Label>
            <Input
              type="number"
              name="parkingSpaces"
              value={property.parkingSpaces}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="location">Address</Label>
            <Input
              type="text"
              name="location"
              value={property.location.address}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="city">City</Label>
            <Input
              type="text"
              name="city"
              value={property.location.city}
              onChange={(e) => setProperty(prev => ({
                ...prev,
                location: {
                  ...prev.location,
                  city: e.target.value
                }
              }))}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="state">State</Label>
            <Input
              type="text"
              name="state"
              value={property.location.state}
              onChange={(e) => setProperty(prev => ({
                ...prev,
                location: {
                  ...prev.location,
                  state: e.target.value
                }
              }))}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Images</Label>
            <ImageUpload
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
          </FormGroup>

          <SubmitButton type="submit">Cadastrar Imóvel</SubmitButton>
        </Form>
      </ListingContainer>
    </Container>
  );
};

export default PropertyListing;
