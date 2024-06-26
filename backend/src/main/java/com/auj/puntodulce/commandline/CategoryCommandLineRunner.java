package com.auj.puntodulce.commandline;

import com.auj.puntodulce.category.Category;
import com.auj.puntodulce.category.CategoryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;

@Configuration
public class CategoryCommandLineRunner {
    @Bean
    @Order(1)
    CommandLineRunner initCategories(CategoryRepository categoryRepository) {
        return args -> {
            String[] categories = {"Chocolate", "Alfajores", "Bocaditos y Bombones", "Chupetines y Chicles", "Galletitas y Barritas", "Dulce de Leche y Miel", "Caramelos y Gomitas","Turrones y Mantecol", "Bebidas","Diet", "Varios"};
            for (String categoryName : categories) {
                categoryRepository.findByName(categoryName).orElseGet(() -> categoryRepository.save(new Category(categoryName)));
            }
        };
    }
}
