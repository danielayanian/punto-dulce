package com.auj.puntodulce.user;

import com.auj.puntodulce.order.CheckoutWholeSaleRequest;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class CustomerDetailsMapper implements Function<CheckoutWholeSaleRequest, CustomerDetails> {
    @Override
    public CustomerDetails apply(CheckoutWholeSaleRequest checkoutWholeSaleRequest) {
        CustomerDetails customerDetails =  new CustomerDetails();
        customerDetails.setAddress(checkoutWholeSaleRequest.getAddress());
        customerDetails.setApartment(checkoutWholeSaleRequest.getApartment());
        customerDetails.setPhone(checkoutWholeSaleRequest.getPhone());
        customerDetails.setFullName(checkoutWholeSaleRequest.getFullName());
        customerDetails.setNeighborhood(checkoutWholeSaleRequest.getNeighborhood());
        return customerDetails;
    }
}