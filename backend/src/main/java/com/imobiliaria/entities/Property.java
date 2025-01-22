package com.imobiliaria.entities;

import com.imobiliaria.enums.PropertyStatus;
import com.imobiliaria.enums.PropertyType;
import com.imobiliaria.enums.Feature;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "properties")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PropertyType type;

    @Column(nullable = false)
    private BigDecimal price;

    private Integer area;

    private Integer bedrooms;

    private Integer bathrooms;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "location_id")
    private Location location;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PropertyStatus status;

    @ElementCollection(targetClass = Feature.class)
    @CollectionTable(name = "property_features", joinColumns = @JoinColumn(name = "property_id"))
    @Enumerated(EnumType.STRING)
    @Column(name = "feature")
    private Set<Feature> features = new HashSet<>();

    @OneToMany(mappedBy = "property", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PropertyImage> images = new ArrayList<>();
}
