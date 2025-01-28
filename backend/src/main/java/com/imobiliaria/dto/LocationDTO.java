package com.imobiliaria.dto;

import lombok.Data;

@Data
public class LocationDTO {
    private String address;
    private String city;
    private String state;
    private Double latitude;
    private Double longitude;
}
