package com.auj.puntodulce.cart;

import com.auj.puntodulce.exception.ProductNotFound;
import com.auj.puntodulce.product.Product;
import com.auj.puntodulce.product.ProductRepository;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.Optional;
import java.util.UUID;

@Repository
public class CartDataAccessService {
    private final CartRepository cartRepository;

    public CartDataAccessService(ProductRepository productRepository, CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public Optional<Cart> findById(UUID cartId) {
        return cartRepository.findById(cartId);
    }

    public Cart findCartByIdOrCreate(UUID cartId) {
        return cartId == null ? new Cart() : findById(cartId).orElse(new Cart());
    }
    public void clearCartItems(Cart cart){
        cart.removeAllItems();
        saveCart(cart);
    }
    public Cart saveCart(Cart cart) {
        return cartRepository.save(cart);
    }

}
