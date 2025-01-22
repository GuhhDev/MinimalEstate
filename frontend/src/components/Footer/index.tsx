import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Typography from '@/components/ui/Typography';
import Container from '@/components/ui/Container';
import { FooterContainer, FooterContent, FooterSection, SocialLinks, Copyright } from './styles';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <Typography variant="h4" color="white" weight="bold">
              MinimalEstate
            </Typography>
            <Typography variant="body2" color="white" style={{ marginTop: '1rem', opacity: 0.8 }}>
              Sua imobiliária de confiança para encontrar o imóvel dos seus sonhos. Oferecemos as melhores opções do mercado com atendimento personalizado.
            </Typography>
            <SocialLinks>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={24} />
              </a>
            </SocialLinks>
          </FooterSection>
          
          <FooterSection>
            <Typography variant="h4" color="white" weight="bold">
              Contato
            </Typography>
            <div style={{ marginTop: '1rem' }}>
              <a href="tel:+551199999999" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <FaPhone />
                <Typography variant="body2" color="white" style={{ opacity: 0.8 }}>
                  +55 (11) 9999-9999
                </Typography>
              </a>
              <a href="mailto:contato@minimalestate.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <FaEnvelope />
                <Typography variant="body2" color="white" style={{ opacity: 0.8 }}>
                  contato@minimalestate.com
                </Typography>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaMapMarkerAlt />
                <Typography variant="body2" color="white" style={{ opacity: 0.8 }}>
                  Rua Example, 123 - São Paulo
                </Typography>
              </div>
            </div>
          </FooterSection>
          
          <FooterSection>
            <Typography variant="h4" color="white" weight="bold">
              Links Úteis
            </Typography>
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link to="/imoveis">
                <Typography variant="body2" color="white" style={{ opacity: 0.8 }}>
                  Buscar Imóveis
                </Typography>
              </Link>
              <Link to="/sobre">
                <Typography variant="body2" color="white" style={{ opacity: 0.8 }}>
                  Sobre Nós
                </Typography>
              </Link>
              <Link to="/contato">
                <Typography variant="body2" color="white" style={{ opacity: 0.8 }}>
                  Fale Conosco
                </Typography>
              </Link>
              <Link to="/privacidade">
                <Typography variant="body2" color="white" style={{ opacity: 0.8 }}>
                  Política de Privacidade
                </Typography>
              </Link>
              <Link to="/termos">
                <Typography variant="body2" color="white" style={{ opacity: 0.8 }}>
                  Termos de Uso
                </Typography>
              </Link>
            </div>
          </FooterSection>
        </FooterContent>
      </Container>
      
      <Copyright>
        <Container>
          <Typography variant="body2" color="white" style={{ opacity: 0.8 }}>
            {currentYear} MinimalEstate. Todos os direitos reservados.
          </Typography>
        </Container>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
