import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Nav,
  MenuButton,
  NavLink
} from './styles';
import Typography from '@/components/ui/Typography';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Fecha o menu quando mudar de rota
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Previne scroll quando o menu mobile estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuItems = [
    { path: '/', label: 'Início' },
    { path: '/properties', label: 'Imóveis' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/contato', label: 'Contato' },
    { path: '/anunciar', label: 'Anunciar' }
  ];

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">
          <Typography variant="h4" color="primary" weight="bold">
            MinimalEstate
          </Typography>
        </Logo>

        <Nav isOpen={isOpen}>
          {menuItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              active={location.pathname === path}
              onClick={() => setIsOpen(false)}
            >
              <Typography
                variant="body1"
                color={location.pathname === path ? 'primary' : 'secondary'}
              >
                {label}
              </Typography>
            </NavLink>
          ))}
        </Nav>

        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </MenuButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
