import styled, { css } from 'styled-components';
import { InputProps, InputSize, InputVariant } from './types';

const getSizeStyles = (inputSize: InputSize = 'medium') => {
  const sizes = {
    small: css`
      padding: 8px 12px;
      font-size: 0.875rem;
    `,
    medium: css`
      padding: 12px 16px;
      font-size: 1rem;
    `,
    large: css`
      padding: 16px 20px;
      font-size: 1.125rem;
    `
  };

  return sizes[inputSize];
};

const getVariantStyles = (variant: InputVariant = 'outlined') => {
  const variants = {
    outlined: css`
      border: 2px solid ${({ theme }) => theme.colors.accent};
      background: transparent;

      &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
      }
    `,
    filled: css`
      border: none;
      background: ${({ theme }) => theme.colors.background};

      &:focus {
        background: ${({ theme }) => theme.colors.white};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    `
  };

  return variants[variant];
};

export const InputContainer = styled.div<Pick<InputProps, 'fullWidth'>>`
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.875rem;
  margin-bottom: 4px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input<InputProps>`
  width: 100%;
  border-radius: 4px;
  outline: none;
  transition: all ${({ theme }) => theme.transitions.default};
  color: ${({ theme }) => theme.colors.primary};
  
  ${({ inputSize }) => getSizeStyles(inputSize)}
  ${({ variant }) => getVariantStyles(variant)}
  ${({ error }) =>
    error &&
    css`
      border-color: red;
      &:focus {
        border-color: red;
      }
    `}

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary}80;
  }

  ${({ icon, iconPosition }) =>
    icon &&
    css`
      padding-${iconPosition}: 40px;
    `}
`;

export const Icon = styled.div<{ position: 'left' | 'right' }>`
  position: absolute;
  ${({ position }) => position}: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
`;

export const HelperText = styled.span<{ error?: boolean }>`
  font-size: 0.75rem;
  color: ${({ theme, error }) => error ? 'red' : theme.colors.secondary};
  margin-top: 4px;
`;
