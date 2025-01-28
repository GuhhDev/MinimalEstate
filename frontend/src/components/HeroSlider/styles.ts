import styled from 'styled-components';

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #f8f9fa;
`;

export const HeroContainer = styled.div`
  position: relative;
  height: 600px;
  width: 100%;

  .swiper {
    height: 100%;
  }

  .swiper-pagination-bullet {
    background: white;
    opacity: 0.7;
    
    &-active {
      opacity: 1;
      background: #3498db;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: white;
    
    &:hover {
      color: #3498db;
    }
  }
`;

export const SearchContainer = styled.div`
  width: 90%;
  max-width: 800px;
  margin: -50px auto 50px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 20;
`;

export const SlideContent = styled.div`
  position: relative;
  height: 600px;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0 20px 100px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.7) 100%
    );
    z-index: 1;
  }
`;

export const SlideTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SlideDescription = styled.p`
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
