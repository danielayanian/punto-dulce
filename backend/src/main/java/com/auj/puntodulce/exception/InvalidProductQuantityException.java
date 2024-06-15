package com.auj.puntodulce.exception;

public class InvalidProductQuantityException extends RuntimeException {
    public InvalidProductQuantityException(String message){
        super(message);
    }
}
