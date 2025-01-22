package com.imobiliaria.controller;

import com.imobiliaria.model.Property;
import com.imobiliaria.model.dto.PropertyDTO;
import com.imobiliaria.service.PropertyService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/properties")
@CrossOrigin(origins = "*")
public class PropertyController {

    private final PropertyService propertyService;

    @Autowired
    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }

    @PostMapping
    public ResponseEntity<Property> createProperty(@Valid @RequestBody PropertyDTO propertyDTO) {
        Property property = propertyService.createProperty(propertyDTO);
        return new ResponseEntity<>(property, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Property> getProperty(@PathVariable Long id) {
        Property property = propertyService.getProperty(id);
        return ResponseEntity.ok(property);
    }

    @GetMapping
    public ResponseEntity<List<Property>> getAllProperties() {
        List<Property> properties = propertyService.getAllProperties();
        return ResponseEntity.ok(properties);
    }

    @GetMapping("/type/{type}")
    public ResponseEntity<List<Property>> getPropertiesByType(@PathVariable String type) {
        List<Property> properties = propertyService.getPropertiesByType(type);
        return ResponseEntity.ok(properties);
    }

    @GetMapping("/price")
    public ResponseEntity<List<Property>> getPropertiesByMaxPrice(@RequestParam BigDecimal maxPrice) {
        List<Property> properties = propertyService.getPropertiesByMaxPrice(maxPrice);
        return ResponseEntity.ok(properties);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Property> updateProperty(
            @PathVariable Long id,
            @Valid @RequestBody PropertyDTO propertyDTO) {
        Property property = propertyService.updateProperty(id, propertyDTO);
        return ResponseEntity.ok(property);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProperty(@PathVariable Long id) {
        propertyService.deleteProperty(id);
        return ResponseEntity.noContent().build();
    }
}
