import styled from 'styled-components';

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 150%;
  height: 100%;
  overflow: hidden;
  border-radius: 14px;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.colors.white};
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    width: 46px;
    height: 46px;
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.25);
      transform: scale(1.1);
    }

    &::after {
      font-size: 1.2rem;
    }
  }

  .swiper-slide {
    position: relative;
    overflow: hidden;
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.85);
`;

export const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
`;

export const SlideContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.white};
  z-index: 2;
  text-align: left;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0)
  );

  h1 {
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    line-height: 1.2;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.1rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    opacity: 0.95;
    max-width: 80%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 1rem;
      max-width: 100%;
    }
  }
`;

export const SearchContainer = styled.div`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 900px;
  z-index: 3;
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const SearchInput = styled.input`
  flex: 1;
  height: 56px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const FilterButton = styled.button`
  height: 56px;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);

  svg {
    font-size: 1.3rem;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundLight};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;
