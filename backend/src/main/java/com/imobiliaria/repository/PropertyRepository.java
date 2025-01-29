package com.imobiliaria.repository;

import com.imobiliaria.enums.PropertyType;
import com.imobiliaria.model.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {

    @Query("SELECT p FROM Property p WHERE " +
            "(:location IS NULL OR p.location.city LIKE %:location% OR p.location.state LIKE %:location%) AND " +
            "(:propertyType IS NULL OR p.type = :propertyType) AND " +
            "(:priceRange IS NULL OR p.price <= :priceRange)")
    List<Property> findByLocationAndTypeAndPriceRange(
            @Param("location") String location,
            @Param("propertyType") PropertyType propertyType, // Pode ser nulo
            @Param("priceRange") Double priceRange);
}
