package com.auj.puntodulce.user;

import com.auj.puntodulce.exception.CartNotFoundException;
import com.auj.puntodulce.order.CheckoutWholeSaleRequest;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("api/v1/user")
@SecurityRequirement(name = "bearerAuth")
public class UserController {
    private final CustomerDetailsService customerDetailsService;

    public UserController(CustomerDetailsService customerDetailsService) {
        this.customerDetailsService = customerDetailsService;
    }

    @PostMapping("wholesale-details")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void addWholesaleDetails (@Valid @RequestBody(required = false) WholeSaleDetailsRequest wholeSaleDetailsRequest, HttpServletRequest request, Authentication authentication) {
        customerDetailsService.createWholesaleDetails(wholeSaleDetailsRequest, authentication.getName());
    }
}
