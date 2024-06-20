package com.auj.puntodulce.product;

import com.auj.puntodulce.exception.ProductNotFound;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ProductService {
    private final ProductDataAccessService productDataAccessService;
    private final ProductDTOMapper productDTOMapper;

    public ProductService(ProductDataAccessService productDataAccessService, ProductDTOMapper productDTOMapper) {
        this.productDataAccessService = productDataAccessService;
        this.productDTOMapper = productDTOMapper;
    }

    public List<ProductDTO> getProducts(String category){
        return productDataAccessService.getProductsByCategory(category)
                .stream()
                .map(productDTOMapper)
                .collect(Collectors.toList());
    }

    public Product getProduct(UUID uuid){
        return productDataAccessService.selectProductById(uuid)
                .orElseThrow(()-> new ProductNotFound(
                        "Product with id [%s] not found".formatted(uuid)
                ));
    }
}
