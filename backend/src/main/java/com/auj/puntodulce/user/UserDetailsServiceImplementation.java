package com.auj.puntodulce.user;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserDetailsServiceImplementation implements UserDetailsService {

    private final UserDataAccessService userDataAccessService;

    public UserDetailsServiceImplementation(UserDataAccessService userDataAccessService) {
        this.userDataAccessService = userDataAccessService;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userDataAccessService.selectUserByEmail(username).orElseThrow(()-> new UsernameNotFoundException("User not found"));
    }
    public UserDetails loadUserById(String userId) throws UsernameNotFoundException {
        return userDataAccessService.selectUserById(userId).orElseThrow(()-> new UsernameNotFoundException("User not found"));
    }
}
