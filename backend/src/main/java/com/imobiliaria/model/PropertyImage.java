package com.imobiliaria.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "property_images")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PropertyImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String url;

    private String description;

    @ManyToOne
    @JoinColumn(name = "property_id", nullable = false)
    private Property property;
}