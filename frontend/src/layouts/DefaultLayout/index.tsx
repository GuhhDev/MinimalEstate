import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import Container from '@/components/ui/Container';

const Main = styled.main`
  min-height: calc(100vh - 60px);
  margin-top: 60px;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const DefaultLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
