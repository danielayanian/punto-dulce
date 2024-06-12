package com.auj.puntodulce.user;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImplementation implements UserDetailsService {

    private final UserDataAccessService userDataAccessService;

    public UserDetailsServiceImplementation(UserDataAccessService userDataAccessService) {
        this.userDataAccessService = userDataAccessService;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userDataAccessService.selectUserById(username).orElseThrow(()-> new UsernameNotFoundException("User not found"));
    }
}
