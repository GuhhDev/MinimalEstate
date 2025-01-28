import styled, { css } from 'styled-components';
import { ContainerProps, ContainerSize } from './types';

const getSizeStyles = (size: ContainerSize = 'medium') => {
  const sizes = {
    small: css`
      max-width: 100%;
    `,
    medium: css`
      max-width: 100%;
    `,
    large: css`
      max-width: 100%;
    `,
    full: css`
      max-width: 100%;
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
        padding-left: 0;
        padding-right: 0;
  
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
          padding-left: 0;
          padding-right: 0;
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
