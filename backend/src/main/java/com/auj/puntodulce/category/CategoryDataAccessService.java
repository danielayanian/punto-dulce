package com.auj.puntodulce.category;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CategoryDataAccessService implements CategoryDao {

    private final CategoryRepository repository;

    public CategoryDataAccessService(CategoryRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Category> getAllCategories() {
        return repository.findAll();
    }
}
