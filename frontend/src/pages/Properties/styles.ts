import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PropertiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  width: 100%;
`;

export const SearchInput = styled.input`
  flex: 1;
  height: 48px;
  padding: 0 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    cursor: not-allowed;
  }
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 48px;
  padding: 0 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    cursor: not-allowed;
  }

  svg {
    font-size: 1.2rem;
  }
`;

export const NoResults = styled.div`
  text-align: center;
  padding: 4rem 0;

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;
