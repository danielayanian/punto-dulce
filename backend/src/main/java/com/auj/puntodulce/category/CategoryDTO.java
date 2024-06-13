package com.auj.puntodulce.category;

import java.math.BigDecimal;
import java.util.UUID;

public record CategoryDTO(
        UUID id,
        String name,
        String image
        ) {
}
