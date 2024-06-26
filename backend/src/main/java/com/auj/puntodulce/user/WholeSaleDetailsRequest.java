package com.auj.puntodulce.user;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class WholeSaleDetailsRequest {
    @NotEmpty(message = "Full name is required")
    private String fullName;
    @NotEmpty(message = "Address is required")
    String address;
    @NotEmpty(message = "Neighborhood is required")
    String neighborhood;
    @NotEmpty(message = "Phone is required")
    String phone;
    @NotEmpty(message = "VatCondition is required")
    String vatCondition;
    @NotEmpty(message = "Company name is required")
    String companyName;
    @NotEmpty(message = "Tax id is required")
    String taxId;

    public WholesaleDetails toWholesaleDetails(){
        WholesaleDetails wholesaleDetails = new WholesaleDetails();
        wholesaleDetails.setFullName(fullName);
        wholesaleDetails.setAddress(address);
        wholesaleDetails.setPhone(phone);
        wholesaleDetails.setVatCondition(vatCondition);
        wholesaleDetails.setCompanyName(companyName);
        wholesaleDetails.setTaxId(taxId);
        return wholesaleDetails;
    }
}
