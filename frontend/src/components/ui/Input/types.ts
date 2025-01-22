import { InputHTMLAttributes } from 'react';

export type InputSize = 'small' | 'medium' | 'large';
export type InputVariant = 'outlined' | 'filled';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  inputSize?: InputSize;
  variant?: InputVariant;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  helperText?: string;
}
