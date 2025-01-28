import styled from "styled-components"

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
`

export const CarouselWrapper = styled.div`
  height: 60vh;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    height: 40vh;
  }
`

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  &.active {
    opacity: 1;
  }
`

export const ContentSection = styled.div`
  margin: 5%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
  text-align: center;
  border-radius: 15px;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const CTAButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #4CAF50;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.6rem;
  }
`

export const CarouselNav = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
`

export const CarouselDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.active {
    background-color: #ffffff;
  }
`

