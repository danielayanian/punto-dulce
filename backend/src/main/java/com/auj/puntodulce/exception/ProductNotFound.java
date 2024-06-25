package com.auj.puntodulce.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class ProductNotFound extends RuntimeException{

    public ProductNotFound(String message){
        super(message);
    }
}
