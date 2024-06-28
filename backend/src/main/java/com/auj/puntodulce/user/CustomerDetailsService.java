package com.auj.puntodulce.user;

import jakarta.validation.Valid;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CustomerDetailsService {
    private final WholesaleDetailsDataAccessService wholesaleDetailsDataAccessService;
    private final UserDataAccessService userDataAccessService;

    public CustomerDetailsService(WholesaleDetailsDataAccessService wholesaleDetailsDataAccessService, UserDataAccessService userDataAccessService) {
        this.wholesaleDetailsDataAccessService = wholesaleDetailsDataAccessService;
        this.userDataAccessService = userDataAccessService;
    }

    public void createWholesaleDetails(@Valid WholeSaleDetailsPostRequest request, String userId){
        User user = userDataAccessService.selectUserById(userId).orElseThrow(()-> new UsernameNotFoundException("User not found"));
        WholesaleDetails wholesaleDetails = request.toWholesaleDetails();
        wholesaleDetails.setUser(user);
        wholesaleDetailsDataAccessService.saveWholesaleDetails(wholesaleDetails);
    }

    @Transactional
    public void patchWholesaleDetails(WholeSaleDetailsPutRequest request, String userId) {
        WholesaleDetails existingWholesaleDetails = wholesaleDetailsDataAccessService.findByUserId(userId)
                .orElseThrow(
                () -> new UsernameNotFoundException("Wholesale details not found")
                );

        if (request.getFullName() != null) {
            existingWholesaleDetails.setFullName(request.getFullName());
        }
        if (request.getAddress() != null) {
            existingWholesaleDetails.setAddress(request.getAddress());
        }
        if (request.getNeighborhood() != null) {
            existingWholesaleDetails.setNeighborhood(request.getNeighborhood());
        }
        if (request.getPhone() != null) {
            existingWholesaleDetails.setPhone(request.getPhone());
        }
        if (request.getVatCondition() != null) {
            existingWholesaleDetails.setVatCondition(request.getVatCondition());
        }
        if (request.getCompanyName() != null) {
            existingWholesaleDetails.setCompanyName(request.getCompanyName());
        }
        if (request.getTaxId() != null) {
            existingWholesaleDetails.setTaxId(request.getTaxId());
        }

        wholesaleDetailsDataAccessService.saveWholesaleDetails(existingWholesaleDetails);
    }
}
