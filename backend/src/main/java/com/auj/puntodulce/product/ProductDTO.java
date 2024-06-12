package com.auj.puntodulce.product;

import java.math.BigDecimal;
import java.util.UUID;

public record ProductDTO(
        UUID id,
        String name,
        String description,
        String image,
        BigDecimal priceMinor,
        BigDecimal priceMayor
) {
}
