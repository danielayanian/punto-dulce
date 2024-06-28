package com.auj.puntodulce.order;

import lombok.Data;

import java.util.UUID;

@Data
public class WholesaleDetailsPreview {
    private UUID id;
    private String fullName;
    private String address;
    private String neighborhood;
    private String phone;
    private String vatCondition;
    private String companyName;
    private String taxId;
}
