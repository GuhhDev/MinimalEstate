import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-height: 400px;
  overflow-y: auto;
  z-index: 1000;
  margin-top: ${({ theme }) => theme.spacing.sm};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    
    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const ResultItem = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const ResultImage = styled.div`
  width: 100px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ResultContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const IconText = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  
  svg {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 14px;
  }
`;

export const Price = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const NoResults = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

export const LoadingText = styled(NoResults)`
  color: ${({ theme }) => theme.colors.secondary};
`;
