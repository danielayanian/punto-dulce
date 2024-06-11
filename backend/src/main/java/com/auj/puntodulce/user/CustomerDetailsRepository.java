package com.auj.puntodulce.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CustomerDetailsRepository extends JpaRepository<CustomerDetails, UUID> {
}