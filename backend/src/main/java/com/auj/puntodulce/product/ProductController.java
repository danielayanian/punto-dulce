package com.auj.puntodulce.product;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/products")
@Tag(name = "products", description = "Operations related to products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }
    @Operation(summary = "Returns a collection of products", description = "Returns a collection of products. Optionally filters by category. Products that match all filters are fetched.", tags = {"products"})
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved list"),
            @ApiResponse(responseCode = "500", description = "Internal server error", content = @Content)
    })
    @GetMapping
    List<ProductDTO> listProduct(@Parameter(description = "Category to filter by", example = "Chocolate")
                                 @RequestParam(required = false) String category){
        return productService.getProducts(category);
    }

    @Operation(summary = "Returns a product by its ID", description = "Takes in a valid resource ID and returns the product related to it.", tags = {"products"})
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved product"),
            @ApiResponse(responseCode = "404", description = "Product not found"),
            @ApiResponse(responseCode = "500", description = "Internal server error", content = @Content)
    })
    @GetMapping("{productId}")
    public Product getProduct(
            @Parameter(description = "ID of the product to retrieve", required = true)
            @PathVariable("productId")UUID uuid){
        return productService.getProduct(uuid);
    }
}
