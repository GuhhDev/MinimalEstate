import styled from 'styled-components';

export const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('/images/hero-bg.jpg') center/cover no-repeat;
  margin-top: 60px;
  padding: ${({ theme }) => theme.spacing.xxl} 0; 
  text-align: center;
  color: ${({ theme }) => theme.colors.white};

  h1 {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: 3rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    max-width: 600px;
  }
`;

export const PropertiesSection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const PropertiesGrid = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.md};
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
