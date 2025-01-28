import React from 'react';
import { Text } from './styles';
import { TypographyProps } from './types';

const Typography: React.FC<TypographyProps> = ({
  variant,
  weight,
  align = 'left',
  color,
  marginBottom,
  as,
  children,
  ...props
}) => {
  // Define o elemento HTML apropriado com base na variante, se não for especificado
  const Component = as || (variant.startsWith('h') ? variant : 'p');

  return (
    <Text
      as={Component}
      variant={variant}
      weight={weight}
      align={align}
      color={color}
      marginBottom={marginBottom}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Typography;
