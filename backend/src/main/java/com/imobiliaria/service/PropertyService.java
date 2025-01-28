package com.imobiliaria.service;

import com.imobiliaria.dto.PropertyDTO;
import com.imobiliaria.model.Property;
import com.imobiliaria.model.Location;
import com.imobiliaria.repository.PropertyRepository;
import com.imobiliaria.repository.LocationRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PropertyService {

    private final PropertyRepository propertyRepository;
    private final LocationRepository locationRepository;
    private final FileStorageService fileStorageService;

    public PropertyService(
            PropertyRepository propertyRepository,
            LocationRepository locationRepository,
            FileStorageService fileStorageService) {
        this.propertyRepository = propertyRepository;
        this.locationRepository = locationRepository;
        this.fileStorageService = fileStorageService;
    }

    public List<Property> getFeaturedProperties() {
        // Por enquanto retorna todas as propriedades
        // TODO: Implementar lógica para destacar propriedades
        return propertyRepository.findAll();
    }

    public List<Property> searchProperties(String query) {
        // Busca simples por título, descrição ou localização
        String searchQuery = query.toLowerCase();
        return propertyRepository.findAll().stream()
            .filter(p -> 
                (p.getTitle() != null && p.getTitle().toLowerCase().contains(searchQuery)) ||
                (p.getDescription() != null && p.getDescription().toLowerCase().contains(searchQuery))
            )
            .collect(Collectors.toList());
    }

    @Transactional
    public Property createProperty(PropertyDTO propertyDTO, List<MultipartFile> images) {
        Property property = new Property();
        property.setTitle(propertyDTO.getTitle());
        property.setDescription(propertyDTO.getDescription());
        property.setType(propertyDTO.getType());
        property.setPrice(propertyDTO.getPriceAsDouble());
        property.setArea(propertyDTO.getAreaAsDouble());
        property.setBedrooms(propertyDTO.getBedrooms());
        property.setBathrooms(propertyDTO.getBathrooms());
        property.setParkingSpaces(propertyDTO.getParkingSpaces());
        property.setStatus(propertyDTO.getStatus());

        // Save Location first if it exists
        if (propertyDTO.getLocation() != null) {
            Location location = new Location();
            location.setAddress(propertyDTO.getLocation().getAddress());
            location.setCity(propertyDTO.getLocation().getCity());
            location.setState(propertyDTO.getLocation().getState());
            location.setLatitude(propertyDTO.getLocation().getLatitude());
            location.setLongitude(propertyDTO.getLocation().getLongitude());
            
            // Save location first
            location = locationRepository.save(location);
            property.setLocation(location);
        }

        // Handle images
        if (images != null && !images.isEmpty()) {
            List<String> imageUrls = images.stream()
                .map(fileStorageService::storeFile)
                .collect(Collectors.toList());
            property.setImageUrls(imageUrls);
        }

        return propertyRepository.save(property);
    }

    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    public Optional<Property> getPropertyById(Long id) {
        return propertyRepository.findById(id);
    }

    public Property updateProperty(Long id, PropertyDTO propertyDTO) {
        Optional<Property> existingProperty = propertyRepository.findById(id);
        if (existingProperty.isPresent()) {
            Property property = existingProperty.get();
            
            if (propertyDTO.getTitle() != null) property.setTitle(propertyDTO.getTitle());
            if (propertyDTO.getDescription() != null) property.setDescription(propertyDTO.getDescription());
            if (propertyDTO.getType() != null) property.setType(propertyDTO.getType());
            if (propertyDTO.getPrice() != null) property.setPrice(propertyDTO.getPriceAsDouble());
            if (propertyDTO.getArea() != null) property.setArea(propertyDTO.getAreaAsDouble());
            if (propertyDTO.getBedrooms() != null) property.setBedrooms(propertyDTO.getBedrooms());
            if (propertyDTO.getBathrooms() != null) property.setBathrooms(propertyDTO.getBathrooms());
            if (propertyDTO.getLocation() != null) {
                Location location = new Location();
                location.setAddress(propertyDTO.getLocation().getAddress());
                location.setCity(propertyDTO.getLocation().getCity());
                location.setState(propertyDTO.getLocation().getState());
                location.setLatitude(propertyDTO.getLocation().getLatitude());
                location.setLongitude(propertyDTO.getLocation().getLongitude());
                location = locationRepository.save(location);
                property.setLocation(location);
            }
            if (propertyDTO.getFeatures() != null) property.setFeatures(propertyDTO.getFeatures());
            if (propertyDTO.getStatus() != null) property.setStatus(propertyDTO.getStatus());
            
            return propertyRepository.save(property);
        }
        return null;
    }

    public void deleteProperty(Long id) {
        propertyRepository.deleteById(id);
    }
}
