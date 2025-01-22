import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Typography from '@/components/ui/Typography';
import { FaChevronRight } from 'react-icons/fa';

const BreadcrumbNav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  &:hover {
    text-decoration: underline;
  }
`;

const Separator = styled(FaChevronRight)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 12px;
`;

const routeMap: Record<string, string> = {
  '': 'Início',
  'imoveis': 'Imóveis',
  'sobre': 'Sobre',
  'contato': 'Contato',
};

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  return (
    <BreadcrumbNav>
      <BreadcrumbLink to="/">
        <Typography variant="body2" color="secondary">
          Início
        </Typography>
      </BreadcrumbLink>

      {pathnames.map((name: string, idx: number) => {
        const routeTo = `/${pathnames.slice(0, idx + 1).join('/')}`;
        const isLast = idx === pathnames.length - 1;

        return (
          <React.Fragment key={routeTo}>
            <Separator />
            {isLast ? (
              <Typography variant="body2" color="primary">
                {routeMap[name] || name}
              </Typography>
            ) : (
              <BreadcrumbLink to={routeTo}>
                <Typography variant="body2" color="secondary">
                  {routeMap[name] || name}
                </Typography>
              </BreadcrumbLink>
            )}
          </React.Fragment>
        );
      })}
    </BreadcrumbNav>
  );
};

export default Breadcrumb;
