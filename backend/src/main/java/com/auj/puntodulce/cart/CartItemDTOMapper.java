package com.auj.puntodulce.cart;

import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class CartItemDTOMapper implements Function<CartItem, CartItemDTO> {
    @Override
    public CartItemDTO apply(CartItem cartItem) {
        return new CartItemDTO(
                cartItem.getProduct().getId(),
                cartItem.getQuantity(),
                cartItem.getPrice(),
                cartItem.getTotal()
        );
    }
}
