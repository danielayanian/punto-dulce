package com.auj.puntodulce.order;

import com.auj.puntodulce.exception.CartNotFoundException;
import com.auj.puntodulce.exception.InvalidRequestException;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("api/v1/checkout")
@Tag(name = "checkout", description = "Operations related to orders")
@SecurityRequirement(name = "bearerAuth")
public class CheckoutController {
    private final OrderService orderService;

    public CheckoutController(OrderService orderService) {
        this.orderService = orderService;
    }


    @Operation(summary = "Confirm the order", description = "Confirms the order and creates an order.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Successfully confirmed order and created order"),
            @ApiResponse(responseCode = "400", description = "Cart has changes, please review the changes"),
            @ApiResponse(responseCode = "404", description = "Cart not found"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    @PostMapping("wholesale")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void confirmOrder(@Valid @RequestBody(required = false) CheckoutWholeSaleRequest checkoutWholeSaleRequest, HttpServletRequest request, Authentication authentication) {

        UUID cartId = getCartIdFromCookies(request);
        if (cartId == null) {
            throw new CartNotFoundException("Cart not found");
        }
        orderService.confirmOrder(cartId, checkoutWholeSaleRequest, authentication.getName());

    }

    @Operation(summary = "Get preview of the order", description = "Returns a preview of the order with product details, total price, email, and customer details.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved order preview"),
            @ApiResponse(responseCode = "404", description = "Cart or user not found"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    @GetMapping("preview")
    public OrderPreviewResponse getPreviewOrder(HttpServletRequest request, Authentication authentication) {
        UUID cartId = getCartIdFromCookies(request);
        if (cartId == null) {
            throw new CartNotFoundException("Cart not found");
        }
        String userId = authentication.getName();
        return orderService.getPreviewOrder(cartId, userId);
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
