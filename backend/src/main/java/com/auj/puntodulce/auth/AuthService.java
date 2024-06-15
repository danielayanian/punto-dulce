package com.auj.puntodulce.auth;

import com.auj.puntodulce.jwt.JWTUtil;
import com.auj.puntodulce.user.User;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final JWTUtil jwtUtil;

    public AuthService(AuthenticationManager authenticationManager, JWTUtil jwtUtil) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
    }
    public LoginResponse login(AuthLoginRequest request){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        User principal = (User) authentication.getPrincipal();
        String token = jwtUtil.issueToken(principal.getId().toString(), principal.getAuthorities().toString());
        return new LoginResponse(principal.getCart().getId().toString(), token, principal.getId());
    }
}
