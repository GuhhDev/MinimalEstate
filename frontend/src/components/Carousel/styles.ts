import styled from "styled-components"

export const CarouselContainer = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 40vh;
  }
`

export const CarouselTrack = styled.div<{ translateX: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translateX}%);
`

export const CarouselSlide = styled.div`
  flex: 0 0 100%;
  height: 60vh;
  
  @media (max-width: 768px) {
    height: 40vh;
  }
`

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 16px;
  }
`

export const PrevButton = styled(CarouselButton)`
  left: 10px;
`

export const NextButton = styled(CarouselButton)`
  right: 10px;
`
