package com.auj.puntodulce.user;

import java.util.UUID;

public record LoginResponse(String cartId, String jwt, UUID userId) {
}
