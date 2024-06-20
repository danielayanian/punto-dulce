package com.auj.puntodulce.exception;

public class UserEmailNotFound extends RuntimeException{

    public UserEmailNotFound(String message){
        super(message);
    }
}
