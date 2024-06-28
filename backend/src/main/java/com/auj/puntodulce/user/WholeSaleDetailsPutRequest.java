package com.auj.puntodulce.user;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class WholeSaleDetailsPutRequest {
    @NotNull(message = "Full name must not be null")
    String fullName;
    @NotNull(message = "Address must not be null")
    String address;
    @NotNull(message = "Neighborhood must not be null")
    String neighborhood;
    @NotNull(message = "Phone must not be null")
    String phone;
    @NotNull(message = "Vat condition must not be null")
    String vatCondition;
    @NotNull(message = "Company name must not be null")
    String companyName;
    @NotNull(message = "Tax id must not be null")
    String taxId;
}
