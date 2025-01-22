import styled, { css } from 'styled-components';
import { TypographyProps, TypographyVariant, TypographyWeight } from './types';

const getVariantStyles = (variant: TypographyVariant = 'body1') => {
  const variants = {
    h1: css`
      font-size: 2.5rem;
      line-height: 1.2;
      font-family: ${({ theme }) => theme.fonts.heading};
    `,
    h2: css`
      font-size: 2rem;
      line-height: 1.3;
      font-family: ${({ theme }) => theme.fonts.heading};
    `,
    h3: css`
      font-size: 1.75rem;
      line-height: 1.4;
      font-family: ${({ theme }) => theme.fonts.heading};
    `,
    h4: css`
      font-size: 1.5rem;
      line-height: 1.4;
      font-family: ${({ theme }) => theme.fonts.heading};
    `,
    h5: css`
      font-size: 1.25rem;
      line-height: 1.4;
      font-family: ${({ theme }) => theme.fonts.heading};
    `,
    h6: css`
      font-size: 1.125rem;
      line-height: 1.4;
      font-family: ${({ theme }) => theme.fonts.heading};
    `,
    body1: css`
      font-size: 1rem;
      line-height: 1.5;
    `,
    body2: css`
      font-size: 0.875rem;
      line-height: 1.5;
    `,
    caption: css`
      font-size: 0.75rem;
      line-height: 1.5;
    `,
    subtitle: css`
      font-size: 1.125rem;
      line-height: 1.5;
      font-family: ${({ theme }) => theme.fonts.heading};
    `,
    overline: css`
      font-size: 0.75rem;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    `,
    button: css`
      font-size: 0.875rem;
      line-height: 1.75;
      text-transform: uppercase;
      letter-spacing: 0.02em;
      font-weight: 500;
    `
  };

  return variants[variant];
};

const getWeightStyles = (weight: TypographyWeight = 'regular') => {
  const weights = {
    regular: css`
      font-weight: 400;
    `,
    medium: css`
      font-weight: 500;
    `,
    bold: css`
      font-weight: 700;
    `
  };

  return weights[weight];
};

export const StyledTypography = styled.p<TypographyProps>`
  margin: 0;
  ${({ variant }) => getVariantStyles(variant)}
  ${({ weight }) => getWeightStyles(weight)}
  ${({ align }) => align && css`text-align: ${align};`}
  ${({ color, theme }) => color && css`
    color: ${color.startsWith('#') ? color : theme.colors[color] || color};
  `}
  transition: color 0.3s ease;
`;
