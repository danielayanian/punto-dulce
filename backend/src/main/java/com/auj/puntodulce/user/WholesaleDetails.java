package com.auj.puntodulce.user;

import jakarta.persistence.Entity;
import lombok.*;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class WholesaleDetails extends CustomerDetails {
    private String vatCondition;
    private String companyName;
    private String taxId;
}
