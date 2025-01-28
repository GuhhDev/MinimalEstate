import styled from 'styled-components';

export const CardContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 16px;
`;

export const PropertyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
`;

export const Location = styled.span`
  color: #4a5568;
  font-size: 0.875rem;
`;

export const Features = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #4a5568;
  font-size: 0.875rem;

  svg {
    color: #4a5568;
  }
`;

export const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

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
