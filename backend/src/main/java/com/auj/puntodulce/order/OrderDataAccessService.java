package com.auj.puntodulce.order;

import com.auj.puntodulce.cart.*;
import com.auj.puntodulce.enums.Status;
import com.auj.puntodulce.exception.CartNotFoundException;
import com.auj.puntodulce.user.CustomerDetails;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Repository
public class OrderDataAccessService {
    private final OrderRepository orderRepository;
    private final CartDataAccessService cartDataAccessService;
    private final CartItemRepository cartItemRepository;

    public OrderDataAccessService(OrderRepository orderRepository, CartDataAccessService cartDataAccessService, CartItemRepository cartItemRepository) {
        this.orderRepository = orderRepository;
        this.cartDataAccessService = cartDataAccessService;
        this.cartItemRepository = cartItemRepository;
    }
    @Transactional
    public void createOrder(UUID cartId, CustomerDetails customerDetails){
        Cart cart = cartDataAccessService.findById(cartId).orElseThrow(()-> new CartNotFoundException("Cart not found"));
        Order order = new Order();
        order.setCreatedAt(new Date());
        order.setStatus(Status.PENDING);
        order.setTotalPrice(cart.getTotalPriceMinor());
        order.setCustomerDetails(customerDetails);
        order.setUser(customerDetails.getUser());

        orderRepository.save(order);
        List<CartItem> cartItems = cart.getItems();
        for (CartItem item : cartItems) {
            item.setCart(null);
            item.setOrder(order);
            cartItemRepository.save(item);
        }
        cartDataAccessService.clearCartItems(cart);
    }
}
