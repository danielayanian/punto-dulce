package com.auj.puntodulce.user;

import com.auj.puntodulce.exception.CartNotFoundException;
import com.auj.puntodulce.exception.CustomerDetailsNotFound;
import com.auj.puntodulce.order.CheckoutRequest;
import org.hibernate.annotations.Check;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public class CustomerDetailsDataAccessService {
    private final CustomerDetailsRepository customerDetailsRepository;
    private final UserDataAccessService userDataAccessService;
    private final CustomerDetailsMapper customerDetailsMapper;

    public CustomerDetailsDataAccessService(CustomerDetailsRepository customerDetailsRepository, UserDataAccessService userDataAccessService, CustomerDetailsMapper customerDetailsMapper) {
        this.customerDetailsRepository = customerDetailsRepository;
        this.userDataAccessService = userDataAccessService;
        this.customerDetailsMapper = customerDetailsMapper;
    }

    public CustomerDetails findById(UUID customerDetailsId){
        return customerDetailsRepository.findById(customerDetailsId).orElseThrow(() -> new CustomerDetailsNotFound("Customer details not found"));
    }

    public CustomerDetails create(CheckoutRequest checkoutRequest, String userId){
        User user = userDataAccessService.selectUserById(userId).orElseThrow(()->new UsernameNotFoundException("User Not Found"));
        CustomerDetails customerDetails = customerDetailsMapper.apply(checkoutRequest);
        customerDetails.setUser(user);
        return customerDetailsRepository.save(customerDetails);
    }
}
