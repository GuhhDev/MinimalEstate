import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Container = styled.div`
  padding: 80px 20px 40px;
  max-width: 800px;
  margin: 0 auto;
`;

const Content = styled.div`
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

const About: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Sobre a MinimalEstate</h1>
          <p>
            Somos uma imobiliária moderna e inovadora, focada em proporcionar a melhor
            experiência na busca pelo seu imóvel ideal. Com anos de experiência no
            mercado imobiliário, nossa equipe está preparada para atender todas as
            suas necessidades.
          </p>
          <p>
            Nossa missão é simplificar o processo de compra, venda e aluguel de
            imóveis, oferecendo um serviço personalizado e de alta qualidade. 
            Trabalhamos com transparência e profissionalismo para garantir a 
            satisfação dos nossos clientes.
          </p>
          <p>
            Contamos com uma equipe especializada e um portfólio diversificado de
            imóveis em diversas regiões. Nosso compromisso é encontrar a melhor
            solução para você, seja na compra do seu primeiro imóvel ou na
            realização do sonho da casa própria.
          </p>
        </Content>
      </Container>
    </>
  );
};

export default About;
