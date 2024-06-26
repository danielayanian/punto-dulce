package com.auj.puntodulce.user;

import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;

@Repository
public class WholeSaleDetailsDataAccessService {
    private final WholesaleDetailsRepository wholesaleDetailsRepository;
    private final UserDataAccessService userDataAccessService;

    public WholeSaleDetailsDataAccessService(WholesaleDetailsRepository wholesaleDetailsRepository, UserDataAccessService userDataAccessService) {
        this.wholesaleDetailsRepository = wholesaleDetailsRepository;
        this.userDataAccessService = userDataAccessService;
    }

    public void saveWholesaleDetailsTByUserId(WholeSaleDetailsRequest wholeSaleDetailsRequest, String userId){
        User user = userDataAccessService.selectUserById(userId).orElseThrow(()-> new UsernameNotFoundException("User not found"));
        WholesaleDetails wholesaleDetails = wholeSaleDetailsRequest.toWholesaleDetails();
        wholesaleDetails.setUser(user);
        wholesaleDetailsRepository.save(wholesaleDetails);
    }
}
