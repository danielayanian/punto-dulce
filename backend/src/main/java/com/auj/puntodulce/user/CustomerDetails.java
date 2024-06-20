package com.auj.puntodulce.user;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.JdbcTypeCode;

import java.sql.Types;
import java.util.UUID;

@Entity(name = "customer_details")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDetails {
    @Id
    @Column(name = "id")
    @JdbcTypeCode(Types.VARCHAR)
    private UUID id;

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String apartment;

    @Column(nullable = false)
    private String neighborhood;

    @Column(nullable = false)
    private String phone;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @ToString.Exclude
    private User user;

    @PrePersist
    protected void onCreate() {
        if (this.id == null) {
            this.id = UUID.randomUUID();
        }
    }
}
