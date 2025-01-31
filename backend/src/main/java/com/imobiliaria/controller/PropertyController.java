package com.imobiliaria.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.imobiliaria.dto.PropertyDTO;
import com.imobiliaria.model.Property;
import com.imobiliaria.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/properties")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS})
public class PropertyController {

    private final PropertyService propertyService;

    private final ObjectMapper objectMapper;

    public PropertyController(PropertyService propertyService, ObjectMapper objectMapper) {
        this.propertyService = propertyService;
        this.objectMapper = objectMapper;
    }

    @GetMapping("/featured")
    public ResponseEntity<List<Property>> getFeaturedProperties() {
        List<Property> properties = propertyService.getFeaturedProperties();
        return ResponseEntity.ok(properties);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Property>> searchProperties(
            @RequestParam(name = "location", required = false) String location,
            @RequestParam(name = "type", required = false) String propertyType,
            @RequestParam(name = "priceRange", required = false) Double priceRange) {

        List<Property> properties = propertyService.searchProperties(location, propertyType, priceRange);
        return ResponseEntity.ok(properties);
    }

    @PostMapping(name="/anunciar", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE, MediaType.APPLICATION_OCTET_STREAM_VALUE })
    public ResponseEntity<Property> createProperty(
            @RequestPart(name = "property") String propertyJson,
            @RequestPart(name = "images", required = false) List<MultipartFile> images) {
        try {
            System.out.println("=== POST /properties ===");
            System.out.println("Received property JSON: " + propertyJson);
            
            if (propertyJson == null || propertyJson.isEmpty()) {
                System.out.println("Property JSON is null or empty");
                return ResponseEntity.badRequest().build();
            }

            PropertyDTO propertyDTO = objectMapper.readValue(propertyJson, PropertyDTO.class);
            System.out.println("Parsed DTO: " + propertyDTO);
            
            if (images != null) {
                System.out.println("Number of images received: " + images.size());
            }

            Property property = propertyService.createProperty(propertyDTO, images);
            return ResponseEntity.ok(property);
        } catch (Exception e) {
            System.out.println("Error creating property:");
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Property>> getAllProperties() {
        List<Property> properties = propertyService.getAllProperties();
        return ResponseEntity.ok(properties);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Property> getPropertyById(@PathVariable(name = "id") Long id) {
        return propertyService.getPropertyById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Property> updateProperty(
            @PathVariable(name = "id") Long id,
            @RequestBody PropertyDTO propertyDTO) {
        Property updatedProperty = propertyService.updateProperty(id, propertyDTO);
        if (updatedProperty != null) {
            return ResponseEntity.ok(updatedProperty);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProperty(@PathVariable(name = "id") Long id) {
        propertyService.deleteProperty(id);
        return ResponseEntity.ok().build();
    }
}
