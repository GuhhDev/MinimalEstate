package com.imobiliaria.service;

import com.imobiliaria.model.Property;
import com.imobiliaria.model.dto.PropertyDTO;
import com.imobiliaria.repository.PropertyRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PropertyService {

    private final PropertyRepository propertyRepository;

    @Autowired
    public PropertyService(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    @Transactional
    public Property createProperty(PropertyDTO propertyDTO) {
        Property property = new Property();
        BeanUtils.copyProperties(propertyDTO, property);
        return propertyRepository.save(property);
    }

    public Property getProperty(Long id) {
        return propertyRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Imóvel não encontrado com o ID: " + id));
    }

    public List<Property> getAllProperties() {
        return propertyRepository.findByIsAvailableTrue();
    }

    public List<Property> getPropertiesByType(String type) {
        return propertyRepository.findByTypeAndIsAvailableTrue(type);
    }

    public List<Property> getPropertiesByMaxPrice(java.math.BigDecimal maxPrice) {
        return propertyRepository.findByPriceLessThanEqualAndIsAvailableTrue(maxPrice);
    }

    @Transactional
    public Property updateProperty(Long id, PropertyDTO propertyDTO) {
        Property property = getProperty(id);
        BeanUtils.copyProperties(propertyDTO, property, "id", "createdAt", "isAvailable");
        return propertyRepository.save(property);
    }

    @Transactional
    public void deleteProperty(Long id) {
        Property property = getProperty(id);
        property.setIsAvailable(false);
        propertyRepository.save(property);
    }
}
