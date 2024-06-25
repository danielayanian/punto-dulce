package com.auj.puntodulce.order;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class CheckoutRequest {
    @NotEmpty(message = "Full name is required")
    private String fullName;
    @NotEmpty(message = "Address is required")
    String address;
    @NotEmpty(message = "Apartment is required")
    String apartment;
    @NotEmpty(message = "Neighborhood is required")
    String neighborhood;
    @NotEmpty(message = "Phone is required")
    String phone;
}
