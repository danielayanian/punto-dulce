package com.auj.puntodulce.cart;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("api/v1/cart")
@Tag(name = "cart", description = "Operations related to cart")
public class CartController {
    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }
    @Operation(summary = "Post a cart", description = "Adds a product to the cart and returns the updated cart.", tags = {"cart"})
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully added item to cart"),
            @ApiResponse(responseCode = "400", description = "Invalid product or quantity supplied"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    @PostMapping("{productId}")
    public CartDTO postCart(@PathVariable UUID productId, @RequestParam int quantity, HttpServletRequest request, HttpServletResponse response) {
        UUID cartId = getCartIdFromCookies(request);
        CartResponse cartResponse = cartService.addItemToCart(cartId, productId, quantity);
        if (cartId == null) {
            Cookie cookie = new Cookie("cartId", cartResponse.cartId().toString());
            cookie.setHttpOnly(true);
            cookie.setPath("/");
            cookie.setMaxAge(7 * 24 * 60 * 60);
            response.addCookie(cookie);
        }
        return cartResponse.cartDTO();
    }

    private UUID getCartIdFromCookies(HttpServletRequest request) {
        if (request.getCookies() != null) {
            for (Cookie cookie : request.getCookies()) {
                if ("cartId".equals(cookie.getName())) {
                    return UUID.fromString(cookie.getValue());
                }
            }
        }
        return null;
    }
}
