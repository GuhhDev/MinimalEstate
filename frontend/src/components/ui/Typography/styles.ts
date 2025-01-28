import styled from 'styled-components';
import { TypographyProps, ThemeColors } from './types';

export const Text = styled.div<TypographyProps>`
  font-size: ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return '2.5rem';
      case 'h2':
        return '2rem';
      case 'h3':
        return '1.75rem';
      case 'h4':
        return '1.5rem';
      case 'h5':
        return '1.25rem';
      case 'h6':
        return '1rem';
      case 'subtitle':
        return '1.1rem';
      case 'body2':
        return '0.875rem';
      default:
        return '1rem';
    }
  }};
  font-weight: ${({ weight, variant }) => {
    if (weight === 'bold') return '700';
    if (weight) return weight;
    return variant.startsWith('h') ? '700' : '400';
  }};
  line-height: ${({ variant }) => 
    variant.startsWith('h') ? '1.2' : '1.5'
  };
  text-align: ${({ align }) => align || 'left'};
  color: ${({ theme, color }) => {
    if (!color) return theme.colors.text;
    return theme.colors[color as ThemeColors] || color;
  }};
  margin-bottom: ${({ theme, marginBottom }) => {
    if (!marginBottom) return '0';
    const spacing = theme.spacing[marginBottom as keyof typeof theme.spacing];
    return spacing || marginBottom;
  }};
`;
