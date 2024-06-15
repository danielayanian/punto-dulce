package com.auj.puntodulce.auth;

import com.auj.puntodulce.jwt.JWTUtil;
import com.auj.puntodulce.user.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/auth")
@Tag(name = "auth", description = "Operations related to authentication")
@Validated
public class AuthController {
    private final JWTUtil jwtUtil;
    private final UserService userService;
    private final AuthService authService;

    public AuthController(JWTUtil jwtUtil, UserService userService, AuthService authService) {
        this.jwtUtil = jwtUtil;
        this.userService = userService;
        this.authService = authService;
    }

    @Operation(
            summary = "Register a new user",
            description = "Registers a new user with the provided details, issues a JWT token, and sets a cartId cookie.",
            tags = {"auth"}
    )
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Successfully registered user", content = @Content),
            @ApiResponse(responseCode = "400", description = "Invalid request data"),
            @ApiResponse(responseCode = "500", description = "Internal server error", content = @Content)
    })
    @PostMapping("register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterUserDTO request, HttpServletResponse response){
        RegisterResponse registerResponse = userService.addUser(request);
        String jwt = jwtUtil.issueToken(registerResponse.userId(), "ROLE_USER");
        Cookie cookie = new Cookie("cartId", registerResponse.cartId());
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        cookie.setMaxAge(7 * 24 * 60 * 60);
        response.addCookie(cookie);
        return ResponseEntity.noContent().header(HttpHeaders.AUTHORIZATION, jwt).build();
    }

    @Operation(
            summary = "User login",
            description = "Authenticates a user with the provided credentials, issues a JWT token, and sets a cartId cookie.",
            tags = {"auth"}
    )
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Successfully authenticated user", content = @Content),
            @ApiResponse(responseCode = "400", description = "Invalid login credentials"),
            @ApiResponse(responseCode = "500", description = "Internal server error", content = @Content)
    })
    @PostMapping("login")
    public ResponseEntity<?> signInUser(@Valid @RequestBody AuthLoginRequest request, HttpServletResponse response){
        LoginResponse loginResponse = authService.login(request);
        Cookie cookie = new Cookie("cartId", loginResponse.cartId());
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        cookie.setMaxAge(7 * 24 * 60 * 60);
        response.addCookie(cookie);
        return ResponseEntity.noContent().header(HttpHeaders.AUTHORIZATION, loginResponse.jwt()).build();
    }
}
