import Property from 'types/Property';

export interface PropertyCardProps {
  property: Property;
  onPropertyClick?: (id: number) => void;
}
