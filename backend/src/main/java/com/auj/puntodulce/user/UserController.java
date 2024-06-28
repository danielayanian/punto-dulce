package com.auj.puntodulce.user;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/user")
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "User", description = "Operations related to user management")
public class UserController {
    private final CustomerDetailsService customerDetailsService;

    public UserController(CustomerDetailsService customerDetailsService) {
        this.customerDetailsService = customerDetailsService;
    }

    @Operation(summary = "Add wholesale details", description = "Adds wholesale details for the authenticated user")
    @PostMapping("wholesale-details")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void addWholesaleDetails (@Valid @RequestBody(required = false) WholeSaleDetailsPostRequest wholeSaleDetailsPostRequest, Authentication authentication) {
        customerDetailsService.createWholesaleDetails(wholeSaleDetailsPostRequest, authentication.getName());
    }

    @Operation(summary = "Add retailer details", description = "Adds retailer details for the authenticated user")
    @PostMapping("retailer-details")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void addRetailerDetails (@Valid @RequestBody(required = false) WholeSaleDetailsPostRequest wholeSaleDetailsPostRequest, Authentication authentication) {
        customerDetailsService.createWholesaleDetails(wholeSaleDetailsPostRequest, authentication.getName());
    }

    @Operation(summary = "Patch wholesale details", description = "Partially updates wholesale details for the authenticated user")
    @PatchMapping("wholesale-details")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void patchWholesaleDetails(@Valid @RequestBody WholeSaleDetailsPutRequest request, Authentication authentication) {
        customerDetailsService.patchWholesaleDetails(request, authentication.getName());
    }
}
