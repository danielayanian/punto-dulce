package com.auj.puntodulce.user;

import com.auj.puntodulce.cart.CartService;
import com.auj.puntodulce.jwt.JWTUtil;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("api/v1/auth")
@Tag(name = "auth", description = "Operations related to auth")
public class AuthController {
    private final JWTUtil jwtUtil;
    private final UserService userService;
    private final AuthService authService;

    public AuthController(JWTUtil jwtUtil, UserService userService, AuthService authService, CartService cartService) {
        this.jwtUtil = jwtUtil;
        this.userService = userService;
        this.authService = authService;
    }

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
