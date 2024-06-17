package com.auj.puntodulce.product;

import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class ProductDTOMapper implements Function<Product, ProductDTO> {
    @Override
    public ProductDTO apply(Product product) {
        return new ProductDTO(
                product.getId(),
                product.getName(),
                product.getDescription(),
                product.getImage(),
                product.getPriceMinor(),
                product.getPriceMajor()
        );
    }
}
