package com.auj.puntodulce.cart;

import com.auj.puntodulce.product.ProductDTO;

import java.math.BigDecimal;
import java.util.UUID;

public record CartItemDTO(
        ProductDTO product,
        int quantity,
        BigDecimal totalPriceMinor,
        BigDecimal totalPriceMajor
) {
}
