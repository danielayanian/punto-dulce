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
import java.util.List;
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

            List<Product> products = List.of(
                    new Product(UUID.fromString("2ecb32c0-1615-45e5-9ca4-fa189d893949"),"Chocolate Kinder Barrita", "Chocolate Kinder Barrita individual T1 x 24","https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA02/CONTENIDOS/201511/19/00120642900847____1__600x600.jpg", 8, new BigDecimal("10180.00"), new Date(), new BigDecimal("8139.60"), sdf.parse("16/10/2024"), chocolate, null),
                    new Product(UUID.fromString("748b6654-bb1b-4fb5-a924-8a37a6ddd726"), "Chicles TNT ácidos rellenos","Chicles TNT ácidos rellenos x 40u.", "https://www.rimoldimayorista.com.ar/datos/uploads/mod_catalogo/31308/tnt-chicles-61cda5ab1aae2.jpg?t=1640867243",10, new BigDecimal("2220.00"), new Date(), new BigDecimal("1760.00"), sdf.parse("25/08/2025"), chicles, null),
                    new Product(UUID.fromString("ab6d3fd6-0d27-470b-94c6-99a2bbcb6531"), "Pastillas Tic Tac", "Pastillas Tic Tac 24x12u. Mix de frutas","https://chedrauimx.vtexassets.com/arquivos/ids/29720618-1600-auto?v=638497688745000000&width=1600&height=auto&aspect=true", 4, new BigDecimal("6110.00"), new Date(), new BigDecimal("4883.95"), sdf.parse("25/01/2025"), pastillas, null),
                    new Product(UUID.fromString("fe8c7660-1778-4982-8101-f4ccca37b11d"),"Caramelos TNT pintalengua", "Caramelos TNT pintalengua ácido relleno x 60u.","https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/5/15919.jpg", 20, new BigDecimal("3030.00"), new Date(), new BigDecimal("2200.00"), sdf.parse("24/08/2025"), caramelos, null)
            );

            products.forEach(product -> {
                if (product.getId() != null) {
                    productRepository.findById(product.getId()).ifPresentOrElse(
                            existingProduct ->{
                            },
                            () -> {
                                productRepository.save(product);
                            }
                    );
                } else {
                    productRepository.save(product);
                }
            });
        };
    }
}
