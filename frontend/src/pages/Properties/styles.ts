import styled from 'styled-components';

export const PropertiesGrid = styled.div`
  margin-right: 20%;
  margin-left: 20%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: transparent;
  box-shadow: none;
  padding: 0;
`;

export const FiltersContainer = styled.div`
  top: 76px;
  z-index: 50;
  backdrop-filter: blur(8px);
  padding: ${({ theme }) => theme.spacing.md} 0;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const PropertyRow = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    
    img {
      width: 100%;
      height: 200px;
    }
  }
`;

export const PropertyDetails = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Price = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const Address = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

export const Features = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PageContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`;

export const PropertyImage = styled.img`
  
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;

  @media (max-width: 768px) {
    height: 250px;
    width: 100%;
  }
`;

export const PropertyContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PropertyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;
