package com.auj.puntodulce.user;

import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomerDetailsService {
    private final WholeSaleDetailsDataAccessService wholeSaleDetailsDataAccessService;
    private final UserDataAccessService userDataAccessService;

    public CustomerDetailsService(WholeSaleDetailsDataAccessService wholeSaleDetailsDataAccessService, UserDataAccessService userDataAccessService) {
        this.wholeSaleDetailsDataAccessService = wholeSaleDetailsDataAccessService;
        this.userDataAccessService = userDataAccessService;
    }

    public void createWholesaleDetails(WholeSaleDetailsRequest request, String userId){
        User user = userDataAccessService.selectUserById(userId).orElseThrow(()-> new UsernameNotFoundException("User not found"));
        WholesaleDetails wholesaleDetails = request.toWholesaleDetails();
        wholesaleDetails.setUser(user);
        wholeSaleDetailsDataAccessService.saveWholesaleDetails(wholesaleDetails);
    }
}
