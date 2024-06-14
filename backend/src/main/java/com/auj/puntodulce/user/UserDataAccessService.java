package com.auj.puntodulce.user;

import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public class UserDataAccessService {
    private final UserRepository userRepository;

    public UserDataAccessService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(RegisterUserDTO request){
        return userRepository.save(request.toUser()) ;
    }
    public Optional<User> selectUserById(String userId){
        return userRepository.findById(UUID.fromString(userId));
    }
    public Optional<User> selectUserByEmail(String email){
        return userRepository.findUserByEmail(email);
    }

}
