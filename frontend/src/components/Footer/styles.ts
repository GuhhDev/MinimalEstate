import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding-top: ${({ theme }) => theme.spacing.xxl};
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    
    > *:first-child {
      grid-column: 1 / -1;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    
    > * {
      grid-column: 1 / -1;
    }
  }
`;

export const FooterSection = styled.div`
  a {
    text-decoration: none;
    color: inherit;
    transition: opacity 0.3s ease;
    
    &:hover {
      opacity: 1 !important;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
  
  a {
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.8;
    transition: all 0.3s ease;
    
    &:hover {
      opacity: 1;
      transform: translateY(-2px);
    }
  }
`;

export const Copyright = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: ${({ theme }) => theme.spacing.xxl};
  padding: ${({ theme }) => theme.spacing.lg} 0;
  text-align: center;
`;
