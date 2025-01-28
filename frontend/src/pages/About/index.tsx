import React from 'react';
import Header from '../../components/Header';
import * as S from './styles';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.Content>
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
        </S.Content>
      </S.Container>
    </>
  );
};

export default About;
