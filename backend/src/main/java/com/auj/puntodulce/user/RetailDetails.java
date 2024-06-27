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
public class RetailDetails extends CustomerDetails{
    @Column(nullable = true)
    private String dni;
    @Column(nullable = true)
    private String apartment;
}
