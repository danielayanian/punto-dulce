package com.auj.puntodulce.product;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ProductDao {

    List<Product> getAllProducts();

    List<Product> getProductsByCategory(String category);
    Optional<Product> selectProductById(UUID uuid);
}
