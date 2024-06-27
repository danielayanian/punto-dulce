package com.auj.puntodulce.category;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/categories")
@Tag(name = "categories", description = "Operations related to product categories")
public class CategoryController {
    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @Operation(summary = "Returns a collection of categories", description = "Returns a collection of categories.", tags = {"categories"})
    @GetMapping
    List<CategoryDTO> listCategories(){
        return categoryService.getAllCategories();
    }
}
