package com.auj.puntodulce.order;

public record CheckoutRequest( String fullName,
         String address,
         String apartment,
         String neighborhood,
         String phone) {
}
