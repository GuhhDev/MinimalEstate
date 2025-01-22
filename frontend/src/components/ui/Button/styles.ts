import styled, { css } from 'styled-components';
import { ButtonProps, ButtonVariant, ButtonSize } from './types';
import { fadeIn } from '../../../styles/animations';

const getVariantStyles = (variant: ButtonVariant = 'primary') => {
  const variants = {
    primary: css`
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      border: none;

      &:hover {
        background: ${({ theme }) => theme.colors.secondary};
      }
    `,
    secondary: css`
      background: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.primary};
      border: none;

      &:hover {
        filter: brightness(1.1);
      }
    `,
    outline: css`
      background: transparent;
      color: ${({ theme }) => theme.colors.primary};
      border: 2px solid ${({ theme }) => theme.colors.primary};

      &:hover {
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
      }
    `,
    text: css`
      background: transparent;
      color: ${({ theme }) => theme.colors.primary};
      border: none;
      padding: 0;

      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
        text-decoration: underline;
      }
    `
  };

  return variants[variant];
};

const getSizeStyles = (size: ButtonSize = 'medium') => {
  const sizes = {
    small: css`
      padding: 8px 16px;
      font-size: 0.875rem;
    `,
    medium: css`
      padding: 12px 24px;
      font-size: 1rem;
    `,
    large: css`
      padding: 16px 32px;
      font-size: 1.125rem;
    `
  };

  return sizes[size];
};

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  animation: ${fadeIn} 0.3s ease;
  
  ${({ variant }) => getVariantStyles(variant)}
  ${({ size }) => getSizeStyles(size)}
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ loading }) =>
    loading &&
    css`
      position: relative;
      color: transparent;
      pointer-events: none;

      &::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        border: 2px solid transparent;
        border-top-color: currentColor;
        border-right-color: currentColor;
        border-radius: 50%;
        animation: spin 0.6s linear infinite;
      }
    `
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
