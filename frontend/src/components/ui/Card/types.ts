import { HTMLAttributes } from 'react';

export type CardVariant = 'elevated' | 'outlined' | 'flat';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: string;
  hoverable?: boolean;
  clickable?: boolean;
  fullWidth?: boolean;
}
