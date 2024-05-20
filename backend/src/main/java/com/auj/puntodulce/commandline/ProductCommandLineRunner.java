package com.auj.puntodulce.commandline;

import com.auj.puntodulce.category.Category;
import com.auj.puntodulce.category.CategoryRepository;
import com.auj.puntodulce.product.Product;
import com.auj.puntodulce.product.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

@Configuration
public class ProductCommandLineRunner {
    @Bean
    @Order(2)
    CommandLineRunner initDatabase(ProductRepository productRepository, CategoryRepository categoryRepository) {
        return args -> {
            SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

            Category chocolate = categoryRepository.findByName("Chocolate").orElseThrow();
            Category chicles = categoryRepository.findByName("Chicles").orElseThrow();
            Category pastillas = categoryRepository.findByName("Pastillas").orElseThrow();
            Category caramelos = categoryRepository.findByName("Caramelos").orElseThrow();

            productRepository.save(new Product(
                    UUID.randomUUID().toString(),
                    "Chocolate Kinder Barrita individual T1 x 24",
                    8,
                    new BigDecimal("10180.00"),
                    new Date(),
                    new BigDecimal("8139.60"),
                    sdf.parse("16/10/2024"),
                    chocolate,
                    null
            ));
            productRepository.save(new Product(
                    UUID.randomUUID().toString(),
                    "Chicles TNT ácidos rellenos x 40u.",
                    10,
                    new BigDecimal("2220.00"),
                    new Date(),
                    new BigDecimal("1760.00"),
                    sdf.parse("25/08/2025"),
                    chicles,
                    null
            ));
            productRepository.save(new Product(
                    UUID.randomUUID().toString(),
                    "Pastillas Tic Tac 24x12u. Mix de frutas",
                    4,
                    new BigDecimal("6110.00"),
                    new Date(),
                    new BigDecimal("4883.95"),
                    sdf.parse("25/01/2025"),
                    pastillas,
                    null
            ));
            productRepository.save(new Product(
                    UUID.randomUUID().toString(),
                    "Caramelos TNT pintalengua ácido relleno x 60u.",
                    20,
                    new BigDecimal("3030.00"),
                    new Date(),
                    new BigDecimal("2200.00"),
                    sdf.parse("24/08/2025"),
                    caramelos,
                    null
            ));
        };
    }
}
