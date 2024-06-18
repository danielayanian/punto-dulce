package com.auj.puntodulce.order;

import com.auj.puntodulce.cart.CartService;
import com.auj.puntodulce.user.CustomerDetails;
import com.auj.puntodulce.user.CustomerDetailsDataAccessService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
public class OrderService {
    private final OrderDataAccessService orderDataAccessService;
    private final CustomerDetailsDataAccessService customerDetailsDataAccessService;
    private final CartService cartService;

    public OrderService(OrderDataAccessService orderDataAccessService, CustomerDetailsDataAccessService customerDetailsDataAccessService, CartService cartService) {
        this.orderDataAccessService = orderDataAccessService;
        this.customerDetailsDataAccessService = customerDetailsDataAccessService;
        this.cartService = cartService;
    }
    @Transactional
    public void confirmOrder(UUID cartId, CheckoutRequest checkoutRequest,
                             String userId) {

        // Validate cart one more time to ensure no changes have occurred since last validation
        cartService.validateCart(cartId);

        // Process payment (this is a placeholder for actual payment processing logic)

        // Get current authenticated user if available

        // Create order from cart
        CustomerDetails customerDetails = customerDetailsDataAccessService.create(checkoutRequest, userId);
        orderDataAccessService.createOrder(cartId, customerDetails);
    }
    @Transactional
    public void confirmOrder(UUID cartId, UUID customerDetailsId) {

        // Validate cart one more time to ensure no changes have occurred since last validation
        cartService.validateCart(cartId);

        // Process payment (this is a placeholder for actual payment processing logic)

        // Get current authenticated user if available

        // Create order from cart
        CustomerDetails customerDetails = customerDetailsDataAccessService.findById(customerDetailsId);
        orderDataAccessService.createOrder(cartId, customerDetails);
    }
}
