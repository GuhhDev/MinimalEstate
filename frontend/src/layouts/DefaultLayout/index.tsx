import React, { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import Container from '@/components/ui/Container';



const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
        <Container>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </Container>
      <Footer />
    </>
  );
};

export default DefaultLayout;
