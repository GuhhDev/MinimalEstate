import styled from 'styled-components';

export const IconText = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin: ${({ theme }) => theme.spacing.sm} 0;
  
  svg {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 14px;
  }
`;

export const PropertyInfo = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.md} 0;
`;
