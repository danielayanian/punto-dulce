package com.auj.puntodulce.cart;

import com.auj.puntodulce.product.ProductDTOMapper;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class CartItemDTOMapper implements Function<CartItem, CartItemDTO> {
    @Override
    public CartItemDTO apply(CartItem cartItem) {
        return new CartItemDTO(
                new ProductDTOMapper().apply(cartItem.getProduct()),
                cartItem.getQuantity(),
                cartItem.getTotalPriceMinor(),
                cartItem.getTotalPriceMajor()
        );
    }
}
