import { HTMLAttributes } from 'react';
import { theme } from '../../../styles/theme';

export type TypographyVariant = 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'h4' 
  | 'h5'
  | 'h6'
  | 'subtitle' 
  | 'body1' 
  | 'body2';

export type TypographyWeight = '400' | '500' | '600' | '700' | 'bold';
export type TypographyAlign = 'left' | 'center' | 'right';
export type ThemeColors = keyof typeof theme.colors;

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant: TypographyVariant;
  weight?: TypographyWeight;
  align?: TypographyAlign;
  color?: ThemeColors | string;
  marginBottom?: keyof typeof theme.spacing | string;
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}
