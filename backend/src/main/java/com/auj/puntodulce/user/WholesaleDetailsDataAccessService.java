package com.auj.puntodulce.user;

import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public class WholesaleDetailsDataAccessService {
    private final WholesaleDetailsRepository wholesaleDetailsRepository;

    public WholesaleDetailsDataAccessService(WholesaleDetailsRepository wholesaleDetailsRepository) {
        this.wholesaleDetailsRepository = wholesaleDetailsRepository;
    }

    public void saveWholesaleDetails(WholesaleDetails wholeSaleDetails){
        wholesaleDetailsRepository.save(wholeSaleDetails);
    }
    public Optional<WholesaleDetails> findByUserId(String userId){
        return wholesaleDetailsRepository.findByUserId(UUID.fromString(userId));
    }
}
