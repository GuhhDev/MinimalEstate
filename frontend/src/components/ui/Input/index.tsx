import React from 'react';
import {
  InputContainer,
  Label,
  InputWrapper,
  StyledInput,
  Icon,
  HelperText
} from './styles';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  label,
  error,
  inputSize = 'medium',
  variant = 'outlined',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  helperText,
  ...props
}) => {
  return (
    <InputContainer fullWidth={fullWidth}>
      {label && <Label>{label}</Label>}
      <InputWrapper>
        {icon && <Icon position={iconPosition}>{icon}</Icon>}
        <StyledInput
          inputSize={inputSize}
          variant={variant}
          error={error}
          icon={icon}
          iconPosition={iconPosition}
          {...props}
        />
      </InputWrapper>
      {(helperText || error) && (
        <HelperText error={!!error}>
          {error || helperText}
        </HelperText>
      )}
    </InputContainer>
  );
};

export default Input;
