package com.auj.puntodulce.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface WholesaleDetailsRepository extends JpaRepository<WholesaleDetails, UUID> {
    Optional<WholesaleDetails> findByUserId(UUID userId);
}