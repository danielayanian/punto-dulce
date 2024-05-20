package com.auj.puntodulce.product;

import org.springframework.stereotype.Repository;

import java.util.List;

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
}
