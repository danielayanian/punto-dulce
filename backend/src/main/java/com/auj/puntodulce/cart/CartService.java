package com.auj.puntodulce.cart;

import com.auj.puntodulce.exception.ProductNotFound;
import com.auj.puntodulce.product.Product;
import com.auj.puntodulce.product.ProductDataAccessService;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.UUID;

@Service
public class CartService {
    private final CartDataAccessService cartDataAccessService;
    private final ProductDataAccessService productDataAccessService;
    private final CartDTOMapper cartDTOMapper;

    public CartService(CartDataAccessService cartDataAccessService, ProductDataAccessService productDataAccessService, CartDTOMapper cartDTOMapper) {
        this.cartDataAccessService = cartDataAccessService;
        this.productDataAccessService = productDataAccessService;
        this.cartDTOMapper = cartDTOMapper;
    }


    public CartResponse addItemToCart(UUID cartID, UUID productId, int quantity){
        Cart cart = cartDataAccessService.findCartByIdOrCreate(cartID);
        Product product = productDataAccessService.selectProductById(productId)
                .orElseThrow(() -> new ProductNotFound("Product not found"));
        cart.addOrUpdateItem(product, quantity);
        cart = cartDataAccessService.saveCart(cart);
        CartDTO cartDTO = cartDTOMapper.apply(cart);

        return new CartResponse(cart.getId(), cartDTO);
    }
}
