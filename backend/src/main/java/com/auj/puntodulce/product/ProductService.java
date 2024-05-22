package com.auj.puntodulce.product;

import com.auj.puntodulce.exception.ProductNotFound;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ProductService {
    private final ProductDataAccessService productDataAccessService;

    public ProductService(ProductDataAccessService productDataAccessService) {
        this.productDataAccessService = productDataAccessService;
    }

    public List<Product> getAllProducts(){
        return productDataAccessService.getAllProducts();
    }

    public Product getProduct(UUID uuid){
        return productDataAccessService.selectProductById(uuid)
                .orElseThrow(()-> new ProductNotFound(
                        "Product with id [%s] not found".formatted(uuid)
                ));
    }
}
