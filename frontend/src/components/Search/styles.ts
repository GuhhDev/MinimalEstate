import styled from 'styled-components';

interface SearchContainerProps {
  fullWidth?: boolean;
}

export const SearchContainer = styled.div<SearchContainerProps>`
  position: relative;
  width: ${props => props.fullWidth ? '100%' : '300px'};
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}20;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #0066cc;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
