package com.auj.puntodulce.user;

import com.auj.puntodulce.order.CheckoutRequest;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class CustomerDetailsMapper implements Function<CheckoutRequest, CustomerDetails> {
    @Override
    public CustomerDetails apply(CheckoutRequest checkoutRequest) {
        CustomerDetails customerDetails =  new CustomerDetails();
        customerDetails.setAddress(checkoutRequest.address());
        customerDetails.setApartment(checkoutRequest.apartment());
        customerDetails.setPhone(checkoutRequest.phone());
        customerDetails.setFullName(checkoutRequest.fullName());
        customerDetails.setNeighborhood(checkoutRequest.neighborhood());
        return customerDetails;
    }
}