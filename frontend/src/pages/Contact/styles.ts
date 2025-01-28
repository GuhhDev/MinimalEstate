import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 20px 40px;
  max-width: 600px;
  margin: 0 auto;
`;

export const ContactForm = styled.form`
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.colors.primary};
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.accent};
    border-radius: 4px;
    font-size: 16px;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;