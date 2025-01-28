import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.white};
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
`;

export const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    top: 60px;
    right: 0;
    height: calc(100vh - 60px);
    width: 250px;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing.xl};
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
    transition: transform 0.3s ease;
    box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const NavLink = styled(Link)<{ active?: boolean }>`
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transform: scaleX(${({ active }) => (active ? 1 : 0)});
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
