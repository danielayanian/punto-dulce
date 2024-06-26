package com.auj.puntodulce.user;

import com.auj.puntodulce.exception.CartNotFoundException;
import com.auj.puntodulce.order.CheckoutWholeSaleRequest;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("api/v1/user")
public class UserController {
    @PostMapping("wholesale-details")
    @ResponseStatus(HttpStatus.CREATED)
    public void addWholesaleDetails (@Valid @RequestBody(required = false) WholeSaleDetailsRequest wholeSaleDetailsRequest, HttpServletRequest request, Authentication authentication) {
        orderService.confirmOrder(cartId, checkoutWholeSaleRequest, authentication.getName());

    }
}
