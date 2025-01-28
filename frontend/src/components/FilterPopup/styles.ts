import styled from 'styled-components';

export const FilterContainer = styled.div`
  position: relative;
  width: 95%;
  max-width: 500px;
  margin: 20px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #333;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  font-size: 14px;
  background: white;

  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;

export const Button = styled.button`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
`;

export const ClearButton = styled(Button)`
  background: #f5f5f5;
  color: #666;

  &:hover {
    background: #e1e1e1;
  }
`;

export const ApplyButton = styled(Button)`
  background: #0066cc;
  color: white;

  &:hover {
    background: #0052a3;
  }
`;
