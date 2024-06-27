package com.auj.puntodulce.user;

import com.auj.puntodulce.exception.CustomerDetailsNotFound;
import com.auj.puntodulce.order.CheckoutWholeSaleRequest;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public class CustomerDetailsDataAccessService {
    private final WholesaleDetailsRepository wholesaleDetailsRepository;
    private final UserDataAccessService userDataAccessService;
    private final CustomerDetailsMapper customerDetailsMapper;

    public CustomerDetailsDataAccessService(WholesaleDetailsRepository wholesaleDetailsRepository, UserDataAccessService userDataAccessService, CustomerDetailsMapper customerDetailsMapper) {
        this.wholesaleDetailsRepository = wholesaleDetailsRepository;
        this.userDataAccessService = userDataAccessService;
        this.customerDetailsMapper = customerDetailsMapper;
    }

    public CustomerDetails findById(UUID customerDetailsId){
        return wholesaleDetailsRepository.findById(customerDetailsId).orElseThrow(() -> new CustomerDetailsNotFound("Customer details not found"));
    }

}
