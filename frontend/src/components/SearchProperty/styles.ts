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
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xl};
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
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background-color: ${({ theme }) => theme.colors.background};

  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    text-align: center;
  }
`;

export const PropertiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    padding: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const ViewAllButton = styled.button`
  display: block;
  margin: ${({ theme }) => theme.spacing.xl} auto 0;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;
