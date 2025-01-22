import React from 'react';
import {
  StyledCard,
  CardHeader,
  CardContent,
  CardFooter
} from './styles';
import { CardProps } from './types';

interface CompoundCard
  extends React.FC<CardProps> {
  Header: typeof CardHeader;
  Content: typeof CardContent;
  Footer: typeof CardFooter;
}

const Card: CompoundCard = ({
  children,
  variant = 'elevated',
  padding,
  hoverable = false,
  clickable = false,
  fullWidth = false,
  ...props
}) => {
  return (
    <StyledCard
      variant={variant}
      padding={padding}
      hoverable={hoverable}
      clickable={clickable}
      fullWidth={fullWidth}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
