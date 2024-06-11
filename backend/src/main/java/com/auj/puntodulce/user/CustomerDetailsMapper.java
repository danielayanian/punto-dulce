package com.auj.puntodulce.user;

import com.auj.puntodulce.order.CheckoutRequest;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class CustomerDetailsMapper implements Function<CheckoutRequest, CustomerDetails> {
    @Override
    public CustomerDetails apply(CheckoutRequest checkoutRequest) {
        return new CustomerDetails(null,checkoutRequest.fullName(),
                checkoutRequest.address(), checkoutRequest.apartment(), checkoutRequest.neighborhood(),checkoutRequest.phone()
        );
    }
}