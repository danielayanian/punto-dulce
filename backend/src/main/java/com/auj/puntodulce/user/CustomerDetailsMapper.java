package com.auj.puntodulce.user;

import com.auj.puntodulce.order.CheckoutRequest;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class CustomerDetailsMapper implements Function<CheckoutRequest, CustomerDetails> {
    @Override
    public CustomerDetails apply(CheckoutRequest checkoutRequest) {
        CustomerDetails customerDetails =  new CustomerDetails();
        customerDetails.setAddress(checkoutRequest.getAddress());
        customerDetails.setApartment(checkoutRequest.getApartment());
        customerDetails.setPhone(checkoutRequest.getPhone());
        customerDetails.setFullName(checkoutRequest.getFullName());
        customerDetails.setNeighborhood(checkoutRequest.getNeighborhood());
        return customerDetails;
    }
}