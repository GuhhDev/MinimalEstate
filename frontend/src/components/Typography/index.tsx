import React from 'react';
import styled, { css } from 'styled-components';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body1';
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const StyledTypography = styled.div<{ variant: string }>`
  ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return css`
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #333;
        `;
      case 'h2':
        return css`
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #444;
        `;
      case 'h3':
        return css`
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #555;
        `;
      case 'body1':
      default:
        return css`
          font-size: 1rem;
          line-height: 1.5;
          color: #666;
        `;
    }
  }}
`;

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  as,
  className,
  children
}) => {
  return (
    <StyledTypography
      variant={variant}
      as={as || variant.startsWith('h') ? variant : 'p'}
      className={className}
    >
      {children}
    </StyledTypography>
  );
};
