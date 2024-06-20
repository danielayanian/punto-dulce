package com.auj.puntodulce.order;

import lombok.Data;

import java.util.UUID;

@Data
public class CustomerDetailsPreview {
    private UUID id;
    private String fullName;
    private String address;
    private String apartment;
    private String neighborhood;
    private String phone;
}
