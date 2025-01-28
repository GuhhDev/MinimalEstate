import styled from 'styled-components';

export const HeroSection = styled.section`
  height: 100vh;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ), url('/casa1.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 20px;
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Subtitle = styled.p`
  font-size: 24px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const SearchForm = styled.form`
  width: 100%;
`;

export const SearchContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr) auto;
  gap: 15px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #3498db;
  }

  &::placeholder {
    color: #95a5a6;
  }
`;

export const SearchButton = styled.button`
  background: #3498db;
  color: white;
  border: none;
  padding: 15px 30px;
  height: 100%;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: #2980b9;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;