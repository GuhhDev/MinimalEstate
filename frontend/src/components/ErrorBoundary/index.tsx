import React, { Component, ErrorInfo, ReactNode } from 'react';
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import styled from 'styled-components';

const ErrorContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.xl};
`;

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Erro na aplicação:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <Typography variant="h1" color="primary">
            Ops! Algo deu errado
          </Typography>
          <Typography variant="body1" color="secondary">
            Desculpe pelo inconveniente. Por favor, tente novamente.
          </Typography>
          <Button 
            variant="primary"
            onClick={() => window.location.reload()}
          >
            Recarregar Página
          </Button>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
