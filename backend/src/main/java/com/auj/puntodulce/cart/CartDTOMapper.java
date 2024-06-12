package com.auj.puntodulce.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class CartDTOMapper implements Function<Cart, CartDTO> {

    private final CartItemDTOMapper cartItemDTOMapper;

    @Autowired
    public CartDTOMapper(CartItemDTOMapper cartItemDTOMapper) {
        this.cartItemDTOMapper = cartItemDTOMapper;
    }

    @Override
    public CartDTO apply(Cart cart) {
        List<CartItemDTO> items = cart.getItems().stream()
                .map(cartItemDTOMapper)
                .collect(Collectors.toList());

        return new CartDTO(
                items,
                cart.getTotalItems(),
                cart.getTotalPriceMinor(),
                cart.getTotalPriceMayor()
        );
    }
}
