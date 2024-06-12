package com.auj.puntodulce.user;

import com.auj.puntodulce.exception.InvalidPasswordException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserService {
    private final UserDataAccessService userDataAccessService;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserDataAccessService userDataAccessService, PasswordEncoder passwordEncoder) {
        this.userDataAccessService = userDataAccessService;
        this.passwordEncoder = passwordEncoder;
    }

    public UUID addUser(RegisterUserDTO request){
        if ( !request.getPassword().equals(request.getConfirmPassword())) {
            throw new InvalidPasswordException("Passwords do not match");
        }
        request.setPassword(passwordEncoder.encode(request.getConfirmPassword()));
        return userDataAccessService.createUser(request).getId();
    }
}
