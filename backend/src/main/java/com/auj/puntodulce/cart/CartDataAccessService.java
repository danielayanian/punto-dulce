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

    public Cart findCartByIdOrCreate(UUID cartId) {
        if (cartId == null) {
            return new Cart();
        }
        return cartRepository.findById(cartId).orElseGet(Cart::new);
    }

    public Cart saveCart(Cart cart) {
        return cartRepository.save(cart);
    }

}
