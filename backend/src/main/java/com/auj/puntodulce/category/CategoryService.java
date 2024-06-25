package com.auj.puntodulce.category;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryService {
    private final CategoryDao categoryDao;
    private final CategoryDTOMapper categoryDTOMapper;

    public CategoryService(CategoryDao categoryDao, CategoryDTOMapper categoryDTOMapper) {
        this.categoryDao = categoryDao;
        this.categoryDTOMapper = categoryDTOMapper;
    }


    public List<CategoryDTO> getAllCategories(){
        return categoryDao.getAllCategories()
                .stream()
                .map(categoryDTOMapper)
                .collect(Collectors.toList());
    }
}
