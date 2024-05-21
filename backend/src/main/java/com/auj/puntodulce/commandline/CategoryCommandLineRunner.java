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
            String[] categories = {"Chocolate", "Chicles", "Pastillas", "Caramelos"};
            for (String categoryName : categories) {
                categoryRepository.findByName(categoryName).orElseGet(() -> {
                    return categoryRepository.save(new Category(categoryName));
                });
            }
        };
    }
}
