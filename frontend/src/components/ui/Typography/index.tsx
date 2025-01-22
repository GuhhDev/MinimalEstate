import React from 'react';
import { StyledTypography } from './styles';
import { TypographyProps, TypographyVariant } from './types';

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body1',
  weight = 'regular',
  align = 'left',
  color,
  as,
  ...props
}) => {
  // Define o elemento HTML apropriado com base na variante, se não for especificado
  const getDefaultElement = () => {
    const elements: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
      body1: 'p',
      body2: 'p',
      caption: 'span',
      subtitle: 'p',
      overline: 'span',
      button: 'span'
    };
    return elements[variant];
  };

  return (
    <StyledTypography
      as={as || getDefaultElement()}
      variant={variant}
      weight={weight}
      align={align}
      color={color}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
