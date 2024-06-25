package com.auj.puntodulce.cart;

import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public class CartItemDataAccessService {
    private final CartItemRepository cartItemRepository;

    public CartItemDataAccessService(CartItemRepository cartItemRepository) {
        this.cartItemRepository = cartItemRepository;
    }

    public void deleteItemById(UUID id){
        cartItemRepository.deleteById(id);
    }
}
