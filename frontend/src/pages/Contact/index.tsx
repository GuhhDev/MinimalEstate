import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Container = styled.div`
  padding: 80px 20px 40px;
  max-width: 600px;
  margin: 0 auto;
`;

const ContactForm = styled.form`
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

const FormGroup = styled.div`
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

const Button = styled.button`
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

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário para o backend
    console.log('Dados do formulário:', formData);
    alert('Mensagem enviada com sucesso!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <Header />
      <Container>
        <ContactForm onSubmit={handleSubmit}>
          <h1>Entre em Contato</h1>
          <FormGroup>
            <label>Nome</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label>Telefone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label>Mensagem</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <Button type="submit">Enviar Mensagem</Button>
        </ContactForm>
      </Container>
    </>
  );
};

export default Contact;
