import { styled } from 'styled-components';

export const Container = styled.div`
  padding: 80px 20px 40px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Content = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    color: ${({ theme }) => theme.colors.secondary};
    line-height: 1.6;
    margin-bottom: 20px;
  }
`;