package com.imobiliaria.enums;

public enum PropertyType {
    HOUSE("Casa"),
    APARTMENT("Apartamento"),
    PENTHOUSE("Cobertura"),
    COMMERCIAL("Comercial"),
    LAND("Terreno");

    private final String description;

    PropertyType(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}
