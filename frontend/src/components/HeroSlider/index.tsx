import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperCore } from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { IoFilter } from 'react-icons/io5';
import FilterPopup from '@/components/FilterPopup';
import {
  SliderContainer,
  CarouselWrapper,
  SlideContent,
  SlideImage,
  SlideOverlay,
  SearchContainer,
  SearchInput,
  FilterButton
} from './styles';

import 'swiper/css';
import 'swiper/css/navigation';

interface HeroSliderProps {
  properties?: any[];
  loading?: boolean;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ properties = [], loading = false }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({});

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Implementar lógica de busca
  };

  const handleApplyFilters = (filters: Record<string, any>) => {
    setActiveFilters(filters);
    // Implementar lógica de filtros
  };

  if (loading || properties.length === 0) {
    const slides = [
      {
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
        title: 'Encontre o Imóvel dos Seus Sonhos',
        description: 'Explore nossa seleção exclusiva de propriedades em localizações privilegiadas.'
      },
      {
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
        title: 'Casas e Apartamentos Premium',
        description: 'Descubra residências únicas com acabamento de alto padrão.'
      },
      {
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
        title: 'Investimentos Inteligentes',
        description: 'As melhores oportunidades do mercado imobiliário em um só lugar.'
      }
    ];

    return (
      <SliderContainer>
        <CarouselWrapper>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            loop
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <SlideImage src={slide.image} alt={slide.title} />
                <SlideOverlay />
                <SlideContent>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>
                  </motion.div>
                </SlideContent>
              </SwiperSlide>
            ))}
          </Swiper>
        </CarouselWrapper>

        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Busque por localização, tipo de imóvel ou características..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <FilterButton onClick={() => setIsFilterOpen(true)}>
            <IoFilter />
            Filtros
          </FilterButton>
        </SearchContainer>

        <FilterPopup
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          onApplyFilters={handleApplyFilters}
          initialFilters={activeFilters}
        />
      </SliderContainer>
    );
  }

  return (
    <SliderContainer>
      <CarouselWrapper>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          onSlideChange={(swiper: SwiperCore) => setActiveIndex(swiper.activeIndex)}
          loop
        >
          {properties.map((property, index) => (
            <SwiperSlide key={property.id}>
              <SlideImage src={property.images[0]?.url} alt={property.title} />
              <SlideOverlay />
              <SlideContent>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: activeIndex === index ? 1 : 0, y: activeIndex === index ? 0 : 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1>{property.title}</h1>
                  <p>{property.description}</p>
                </motion.div>
              </SlideContent>
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselWrapper>

      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Busque por localização, tipo de imóvel ou características..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <FilterButton onClick={() => setIsFilterOpen(true)}>
          <IoFilter />
          Filtros
        </FilterButton>
      </SearchContainer>

      <FilterPopup
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilters={handleApplyFilters}
        initialFilters={activeFilters}
      />
    </SliderContainer>
  );
};

export default HeroSlider;
