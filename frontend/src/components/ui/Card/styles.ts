import styled, { css } from 'styled-components';
import { CardProps, CardVariant } from './types';
import { fadeIn } from '../../../styles/animations';

const getVariantStyles = (variant: CardVariant = 'elevated') => {
  const variants = {
    elevated: css`
      background: ${({ theme }) => theme.colors.white};
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    `,
    outlined: css`
      background: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.accent};
    `,
    flat: css`
      background: ${({ theme }) => theme.colors.background};
    `
  };

  return variants[variant];
};

export const StyledCard = styled.div<CardProps>`
  border-radius: 8px;
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.default};
  animation: ${fadeIn} 0.3s ease;
  
  ${({ variant }) => getVariantStyles(variant)}
  ${({ padding }) => padding && css`padding: ${padding};`}
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}
  
  ${({ hoverable }) =>
    hoverable &&
    css`
      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
    `}
    
  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
      
      &:active {
        transform: scale(0.98);
      }
    `}
`;

export const CardHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
`;

export const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const CardFooter = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.background};
`;
