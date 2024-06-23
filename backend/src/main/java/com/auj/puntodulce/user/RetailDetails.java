package com.auj.puntodulce.user;

import jakarta.persistence.Entity;
import lombok.*;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class RetailDetails extends CustomerDetails{
    private String dni;
    private String apartment;
}
