import styled from 'styled-components';

export const PropertyContainer = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  padding: 30px;

  .price {
    color: #0066cc;
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0;
  }
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;

  .detail-item {
    text-align: center;
  }
`;
