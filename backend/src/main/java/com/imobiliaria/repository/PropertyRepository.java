package com.imobiliaria.repository;

import com.imobiliaria.model.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {
    List<Property> findByIsAvailableTrue();
    List<Property> findByTypeAndIsAvailableTrue(String type);
    List<Property> findByPriceLessThanEqualAndIsAvailableTrue(java.math.BigDecimal maxPrice);
}
