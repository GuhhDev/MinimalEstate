import React from 'react';
import { StyledButton } from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  loading = false,
  icon,
  iconPosition = 'left',
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      loading={loading}
      {...props}
    >
      {iconPosition === 'left' && icon}
      {children}
      {iconPosition === 'right' && icon}
    </StyledButton>
  );
};

export default Button;
