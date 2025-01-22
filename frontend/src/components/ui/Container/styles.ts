import styled, { css } from 'styled-components';
import { ContainerProps, ContainerSize } from './types';

const getSizeStyles = (size: ContainerSize = 'medium') => {
  const sizes = {
    small: css`
      max-width: 600px;
    `,
    medium: css`
      max-width: 1200px;
    `,
    large: css`
      max-width: 1400px;
    `,
    full: css`
      max-width: none;
    `
  };

  return sizes[size];
};

export const StyledContainer = styled.div<ContainerProps>`
  width: 100%;
  margin: 0 auto;
  ${({ size }) => getSizeStyles(size)}
  
  ${({ verticalPadding }) =>
    verticalPadding &&
    css`
      padding-top: ${({ theme }) => theme.spacing.xl};
      padding-bottom: ${({ theme }) => theme.spacing.xl};
    `}
    
  ${({ horizontalPadding }) =>
    horizontalPadding &&
    css`
      padding-left: ${({ theme }) => theme.spacing.xl};
      padding-right: ${({ theme }) => theme.spacing.xl};
      
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding-left: ${({ theme }) => theme.spacing.md};
        padding-right: ${({ theme }) => theme.spacing.md};
      }
    `}
    
  ${({ centerContent }) =>
    centerContent &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}
`;
