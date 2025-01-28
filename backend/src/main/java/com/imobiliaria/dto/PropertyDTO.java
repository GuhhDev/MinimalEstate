package com.imobiliaria.dto;

import com.imobiliaria.enums.Feature;
import com.imobiliaria.enums.PropertyStatus;
import com.imobiliaria.enums.PropertyType;
import lombok.Data;

import java.util.List;

@Data
public class PropertyDTO {
    private String title;
    private String description;
    private PropertyType type;
    private String price; 
    private String area; 
    private Integer bedrooms; 
    private Integer bathrooms; 
    private Integer parkingSpaces;
    private LocationDTO location;
    private List<Feature> features;
    private List<String> imageUrls;
    private PropertyStatus status;

    public Double getPriceAsDouble() {
        return price != null ? Double.parseDouble(price) : null;
    }

    public Double getAreaAsDouble() {
        return area != null ? Double.parseDouble(area) : null;
    }
}
