import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 400px;
  overflow-y: auto;
  z-index: 1000;
`;

export const DropdownItem = styled.div`
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const PropertyTitle = styled.h4`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

export const PropertyInfo = styled.p`
  margin: 0.25rem 0 0;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const LoadingText = styled.p`
  padding: 1rem;
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const ErrorText = styled.p`
  padding: 1rem;
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.error};
`;

export const NoResultsText = styled.p`
  padding: 1rem;
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const NoResults = styled.div`
  padding: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.875rem;
`;
