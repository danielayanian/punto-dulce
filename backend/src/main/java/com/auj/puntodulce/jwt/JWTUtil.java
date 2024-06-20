package com.auj.puntodulce.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class JWTUtil {
    private static final String SECRET_KEY = "punto-dulce-12346-punto-dulce-12346-punto-dulce-12346-punto-dulce-12346";
    public String issueToken(String subject){
        return issueToken(subject, Map.of());
    }
    public String issueToken(String subject, String ...scopes){
        return issueToken(subject, Map.of("scopes", scopes));
    }
    public String issueToken(String subject, List<String> scopes){
        return issueToken(subject, Map.of("scopes", scopes));
    }
    public String issueToken(String subject, Map<String, Object> claims){
        return Jwts
                            .builder()
                            .subject(subject)
                            .claims(claims)
                            .issuer("https://punto-dulce.com.ar")
                            .issuedAt(Date.from(Instant.now()))
                            .expiration(Date.from(Instant.now().plus(3, ChronoUnit.DAYS)))
                            .signWith(getSigningKey())
                            .compact();
    }

    public String getSubject(String token){
        return getClaims(token).getSubject();
    }

    private Claims getClaims(String token) {
        return Jwts
                .parser()
                .verifyWith(getSigningKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    private SecretKey getSigningKey(){
        return Keys.hmacShaKeyFor(SECRET_KEY.getBytes(StandardCharsets.UTF_8));
    }

    public boolean isTokenValid(String jwt, String username) {
        String subject = getSubject(jwt);
        return subject.equals(username) && !isTokenExpired(jwt);
    }

    private boolean isTokenExpired(String jwt) {
        Date today = Date.from(Instant.now());
        return getClaims(jwt).getExpiration().before(today);
    }
}
