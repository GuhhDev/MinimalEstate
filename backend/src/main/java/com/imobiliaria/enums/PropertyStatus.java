package com.imobiliaria.enums;

public enum PropertyStatus {
    AVAILABLE("Disponível"),
    SOLD("Vendido"),
    RENTED("Alugado"),
    RESERVED("Reservado"),
    UNDER_MAINTENANCE("Em Manutenção");

    private final String description;

    PropertyStatus(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}
