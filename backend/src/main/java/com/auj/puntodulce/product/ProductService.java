package com.auj.puntodulce.product;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductDataAccessService productDataAccessService;

    public ProductService(ProductDataAccessService productDataAccessService) {
        this.productDataAccessService = productDataAccessService;
    }

    public List<Product> getAllProducts(){
        return productDataAccessService.getAllProducts();
    }


}
