import styled from 'styled-components';

export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  color: #333;

  &:focus {
    outline: none;
    border-color: #0066cc;
  }

  &::placeholder {
    color: #999;
  }
`;

export const SearchButton = styled.button`
  padding: 12px 24px;
  background: #0066cc;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #0052a3;
  }
`;

export const FilterButton = styled.button`
  padding: 12px 24px;
  background: #f5f5f5;
  color: #333;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #e9e9e9;
  }
`;
