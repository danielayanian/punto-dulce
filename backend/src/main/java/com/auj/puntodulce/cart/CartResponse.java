package com.auj.puntodulce.cart;

import java.util.UUID;

public record CartResponse(UUID cartId, CartDTO cartDTO) {
}
