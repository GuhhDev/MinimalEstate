package com.imobiliaria.model;

import com.imobiliaria.enums.Feature;
import com.imobiliaria.enums.PropertyStatus;
import com.imobiliaria.enums.PropertyType;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "properties")
public class Property {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, length = 1000)
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PropertyType type;

    @Column(nullable = false)
    private Double price;

    @Column(nullable = false)
    private Double area;

    private Integer bedrooms;

    private Integer bathrooms;

    private Integer parkingSpaces;

    @ManyToOne
    @JoinColumn(name = "location_id")
    private Location location;

    @ElementCollection
    @CollectionTable(name = "property_features", 
        joinColumns = @JoinColumn(name = "property_id"))
    @Column(name = "feature")
    @Enumerated(EnumType.STRING)
    private List<Feature> features;

    @ElementCollection
    @CollectionTable(name = "property_images",
        joinColumns = @JoinColumn(name = "property_id"))
    @Column(name = "url")
    private List<String> imageUrls;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PropertyStatus status;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}