package com.auj.puntodulce.user;

import com.auj.puntodulce.exception.CartNotFoundException;
import com.auj.puntodulce.exception.CustomerDetailsNotFound;
import com.auj.puntodulce.order.CheckoutRequest;
import org.hibernate.annotations.Check;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public class CustomerDetailsDataAccessService {
    private final CustomerDetailsRepository customerDetailsRepository;
    private final CustomerDetailsMapper customerDetailsMapper;

    public CustomerDetailsDataAccessService(CustomerDetailsRepository customerDetailsRepository, CustomerDetailsMapper customerDetailsMapper) {
        this.customerDetailsRepository = customerDetailsRepository;
        this.customerDetailsMapper = customerDetailsMapper;
    }

    public CustomerDetails findById(UUID customerDetailsId){
        return customerDetailsRepository.findById(customerDetailsId).orElseThrow(() -> new CustomerDetailsNotFound("Customer details not found"));
    }

    public CustomerDetails create(CheckoutRequest checkoutRequest){
        CustomerDetails customerDetails = customerDetailsMapper.apply(checkoutRequest);
        return customerDetailsRepository.save(customerDetails);
    }
}
