import React from 'react';
import { StyledContainer } from './styles';
import { ContainerProps } from './types';

const Container: React.FC<ContainerProps> = ({
  children,
  size = 'medium',
  verticalPadding = true,
  horizontalPadding = true,
  centerContent = false,
  ...props
}) => {
  return (
    <StyledContainer
      size={size}
      verticalPadding={verticalPadding}
      horizontalPadding={horizontalPadding}
      centerContent={centerContent}
      {...props}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
