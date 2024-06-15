package com.auj.puntodulce.auth;

import com.auj.puntodulce.cart.Cart;
import com.auj.puntodulce.user.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class RegisterUserDTO {
    @NotEmpty(message = "the email address is required")
    @Email(message = "the email address is invalid", flags = {Pattern.Flag.CASE_INSENSITIVE})
    private String email;

    @NotBlank(message = "the password is required")
    @Pattern(regexp = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!*()]).{8,}$", message = "Password must be 8 characters long and combination of uppercase letters, lowercase letters, numbers, special characters.")
    private String password;

    @NotBlank(message = "the confirm Password is required")
    private String confirmPassword;

    public User toUser(){
        User user = new User();
        user.setEmail(email);
        user.setPassword(password);

        Cart cart = new Cart();
        cart.setUser(user);
        user.setCart(cart);

        return user;
    }
}
