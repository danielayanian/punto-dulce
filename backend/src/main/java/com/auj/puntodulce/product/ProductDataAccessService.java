package com.auj.puntodulce.product;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public class ProductDataAccessService implements ProductDao{
    private final ProductRepository repository;

    public ProductDataAccessService(ProductRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Product> getAllProducts() {
        return repository.findAll();
    }

    @Override
    public Optional<Product> selectProductById(UUID uuid) {
        return repository.findById(uuid);
    }
}
