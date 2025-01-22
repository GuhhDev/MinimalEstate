package com.imobiliaria.model.dto;
import jakarta.validation.constraints.*;
import lombok.Data;
import java.math.BigDecimal;

@Data
public class PropertyDTO {
    
    @NotBlank(message = "O título é obrigatório")
    @Size(min = 3, max = 100, message = "O título deve ter entre 3 e 100 caracteres")
    private String title;

    @NotBlank(message = "A descrição é obrigatória")
    @Size(min = 10, max = 1000, message = "A descrição deve ter entre 10 e 1000 caracteres")
    private String description;

    @NotBlank(message = "O endereço é obrigatório")
    private String address;

    @NotNull(message = "O preço é obrigatório")
    @DecimalMin(value = "0.0", message = "O preço deve ser maior que zero")
    private BigDecimal price;

    @NotNull(message = "A área é obrigatória")
    @DecimalMin(value = "0.0", message = "A área deve ser maior que zero")
    private Double squareMeters;

    @NotNull(message = "O número de quartos é obrigatório")
    @Min(value = 0, message = "O número de quartos não pode ser negativo")
    private Integer bedrooms;

    @NotNull(message = "O número de banheiros é obrigatório")
    @Min(value = 0, message = "O número de banheiros não pode ser negativo")
    private Integer bathrooms;

    @Min(value = 0, message = "O número de vagas de garagem não pode ser negativo")
    private Integer parkingSpaces;

    @NotBlank(message = "O tipo do imóvel é obrigatório")
    private String type;
}
