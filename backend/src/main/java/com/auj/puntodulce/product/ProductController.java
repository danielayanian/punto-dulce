package com.auj.puntodulce.product;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    List<Product> listProduct(){
        return productService.getAllProducts();
    }
    @GetMapping("{productId}")
    public Product getProduct(@PathVariable("productId")UUID uuid){
        return productService.getProduct(uuid);
    }
}
