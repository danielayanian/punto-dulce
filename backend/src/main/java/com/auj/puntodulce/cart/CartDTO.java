package com.auj.puntodulce.cart;

import java.math.BigDecimal;
import java.util.List;

public record CartDTO(
        List<CartItemDTO> items,
        int totalItems,
        BigDecimal totalPriceMinor,
        BigDecimal totalPriceMajor
) {
}
