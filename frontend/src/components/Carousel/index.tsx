import type React from "react"
import { useState, useEffect } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import * as S from "./styles"

interface CarouselProps {
  images: string[]
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <S.CarouselContainer>
      <S.CarouselTrack translateX={-currentIndex * 100}>
        {images.map((image, index) => (
          <S.CarouselSlide key={index}>
            <S.CarouselImage src={image} alt={`Slide ${index + 1}`} />
          </S.CarouselSlide>
        ))}
      </S.CarouselTrack>
      <S.PrevButton onClick={handlePrev}>
        <FaChevronLeft />
      </S.PrevButton>
      <S.NextButton onClick={handleNext}>
        <FaChevronRight />
      </S.NextButton>
    </S.CarouselContainer>
  )
}

