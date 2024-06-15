package com.auj.puntodulce.auth;

import java.util.UUID;

public record LoginResponse(String cartId, String jwt, UUID userId) {
}
