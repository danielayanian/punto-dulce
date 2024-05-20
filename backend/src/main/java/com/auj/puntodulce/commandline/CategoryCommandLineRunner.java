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
    @Order(1)  // Se ejecuta primero
    CommandLineRunner initCategories(CategoryRepository categoryRepository) {
        return args -> {
            categoryRepository.save(new Category("Chocolate"));
            categoryRepository.save(new Category("Chicles"));
            categoryRepository.save(new Category("Pastillas"));
            categoryRepository.save(new Category("Caramelos"));
        };
    }
}
