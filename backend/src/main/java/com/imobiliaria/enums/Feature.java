package com.imobiliaria.enums;

public enum Feature {
    POOL("Piscina"),
    GYM("Academia"),
    SECURITY("Segurança 24h"),
    BALCONY("Varanda"),
    AIR_CONDITIONING("Ar Condicionado"),
    GARDEN("Jardim"),
    GARAGE("Garagem"),
    GOURMET_AREA("Área Gourmet"),
    ELEVATOR("Elevador"),
    PLAYGROUND("Playground"),
    PARTY_ROOM("Salão de Festas"),
    PET_FRIENDLY("Pet Friendly"),
    FURNISHED("Mobiliado"),
    LAUNDRY("Lavanderia"),
    STORAGE("Depósito");

    private final String description;

    Feature(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}
