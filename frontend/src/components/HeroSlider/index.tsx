import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FilterState } from "types/FilterState";
import SearchBar from '../SearchBar';
import FilterPopup from '../FilterPopup';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  HeroWrapper,
  HeroContainer,
  SearchContainer,
  SlideContent,
  SlideTitle,
  SlideDescription,
} from './styles';
import Property from 'types/Property';

interface HeroSliderProps {
  properties: Property[];
  onSearch: (query: string) => void;
  onFilter: (filters: FilterState) => void;
  loading?: boolean;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ 
  properties,
  onSearch,
}) => {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [filters, setFilters] = useState({});

  return (
    <HeroWrapper>
      <HeroContainer>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ 
            delay: 5000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          loop
          style={{ height: '100%' }}
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id}>
              <SlideContent
                style={{
                  backgroundImage: `url(${property.imageUrls?.[0] || '/images/property-placeholder.jpg'})`
                }}
              >
                <SlideTitle>{property.title}</SlideTitle>
                <SlideDescription>
                  {property.type} - {property.bedrooms} quartos - 
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(property.price)}
                </SlideDescription>
              </SlideContent>
            </SwiperSlide>
          ))}
        </Swiper>
      </HeroContainer>

      <SearchContainer>
      <FilterPopup onApply={(newFilters) => setFilters(newFilters)}/>
        <SearchBar 
          onSearch={onSearch} 
          onFilterClick={() => setIsFilterOpen(true)} 
        />
        
      </SearchContainer>
    </HeroWrapper>
  );
};

export default HeroSlider;
