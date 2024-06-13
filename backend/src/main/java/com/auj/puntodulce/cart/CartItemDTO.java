package com.auj.puntodulce.cart;

import java.math.BigDecimal;
import java.util.UUID;

public record CartItemDTO(
        UUID productId,
        int quantity,
        BigDecimal price,
        BigDecimal total) {
}
