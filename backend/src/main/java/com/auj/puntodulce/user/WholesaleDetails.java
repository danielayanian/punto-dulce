package com.auj.puntodulce.user;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.*;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class WholesaleDetails extends CustomerDetails {
    @Column(nullable = true)
    private String vatCondition;
    @Column(nullable = true)
    private String companyName;
    @Column(nullable = true)
    private String taxId;
}
