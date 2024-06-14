package com.auj.puntodulce.order;

import com.auj.puntodulce.cart.CartService;
import com.auj.puntodulce.exception.CartNotFoundException;
import com.auj.puntodulce.exception.InvalidRequestException;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/checkout")
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
    @PostMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void confirmOrder(@RequestParam(required = false) UUID customerDetailsId, @RequestBody(required = false) CheckoutRequest checkoutRequest, HttpServletRequest request) {
        if (customerDetailsId != null && checkoutRequest != null) {
            throw new InvalidRequestException("Provide either customerDetailsId or checkoutRequest, not both.");
        }

        if (customerDetailsId == null && checkoutRequest == null) {
            throw new InvalidRequestException("Either customerDetailsId or checkoutRequest must be provided.");
        }

        UUID cartId = getCartIdFromCookies(request);
        if (cartId == null) {
            throw new CartNotFoundException("Cart not found");
        }

        if (customerDetailsId != null) {
            // Create a minimal CheckoutRequest with just the customerDetailsId
            orderService.confirmOrder(cartId, customerDetailsId);
        }else{
            orderService.confirmOrder(cartId, checkoutRequest);
        }

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
