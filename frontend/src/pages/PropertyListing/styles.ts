import styled from 'styled-components';

export const ListingContainer = styled.div`
  padding: 40px 0;
`;

export const Form = styled.form`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  font-size: 14px;
  background: white;

  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  font-size: 14px;
  background: white;

  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

export const ImageUpload = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  font-size: 14px;
  background: white;

  &::file-selector-button {
    padding: 8px 16px;
    margin-right: 16px;
    background: #f5f5f5;
    border: none;
    border-radius: 4px;
    color: #333;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: #e1e1e1;
    }
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #0052a3;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;
