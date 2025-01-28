import React, { useState } from 'react';
import Header from '../../components/Header';
import * as S from './styles';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      <S.Container>
        <S.ContactForm onSubmit={handleSubmit}>
          <S.FormGroup>
            <label>Nome</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <label>Telefone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <label>Mensagem</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </S.FormGroup>
          <S.Button type="submit">Enviar Mensagem</S.Button>
        </S.ContactForm>
      </S.Container>
    </>
  );
};

export default Contact;
