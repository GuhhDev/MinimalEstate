import { HTMLAttributes } from 'react';

export type TypographyVariant = 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'h4' 
  | 'h5'
  | 'h6'
  | 'body1' 
  | 'body2' 
  | 'caption' 
  | 'subtitle'
  | 'overline'
  | 'button';

export type TypographyWeight = 'regular' | 'medium' | 'bold';
export type TypographyAlign = 'left' | 'center' | 'right';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  align?: TypographyAlign;
  color?: string;
  as?: keyof JSX.IntrinsicElements;
}
