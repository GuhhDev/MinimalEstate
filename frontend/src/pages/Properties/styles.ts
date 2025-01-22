import styled from 'styled-components';

export const PropertiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const FiltersContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr auto;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
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
