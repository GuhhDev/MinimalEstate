import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing.xl};
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textLight};
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

export const FilterSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  h3 {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

export const RangeInputs = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  input {
    flex: 1;
    height: 40px;
    padding: 0 ${({ theme }) => theme.spacing.sm};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    font-size: 1rem;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      outline: none;
    }
  }
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: ${({ theme }) => theme.spacing.sm};

  label {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing.xs};
    border-radius: 4px;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundLight};
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};

  button {
    flex: 1;
    height: 48px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.2s;

    &.clear {
      background: none;
      border: 1px solid ${({ theme }) => theme.colors.border};
      color: ${({ theme }) => theme.colors.text};

      &:hover {
        background: ${({ theme }) => theme.colors.backgroundLight};
      }
    }

    &.apply {
      background: ${({ theme }) => theme.colors.primary};
      border: none;
      color: ${({ theme }) => theme.colors.white};

      &:hover {
        background: ${({ theme }) => theme.colors.primaryDark};
      }
    }
  }
`;
