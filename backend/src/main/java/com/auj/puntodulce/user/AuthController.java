package com.auj.puntodulce.user;

import com.auj.puntodulce.jwt.JWTUtil;
import io.swagger.v3.oas.annotations.tags.Tag;
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

    public AuthController(JWTUtil jwtUtil, UserService userService) {
        this.jwtUtil = jwtUtil;
        this.userService = userService;
    }

    @PostMapping("register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterUserDTO request){
        UUID userId = userService.addUser(request);
        String jwt = jwtUtil.issueToken(userId.toString(), "ROLE_USER");
        return ResponseEntity.ok().header(HttpHeaders.AUTHORIZATION, jwt).build();
    }
}
