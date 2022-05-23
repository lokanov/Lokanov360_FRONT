package com.lokanov.project_lokanov360.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lokanov.project_lokanov360.entity.Category;
import com.lokanov.project_lokanov360.entity.Modality;
import com.lokanov.project_lokanov360.repository.CategoryRepository;

@Service
public class CategoryServiceImpl implements CategoryService {
	
	@Autowired
	CategoryRepository categoryRepository;

	@Override
	public Category save(Category category) {
		return categoryRepository.save(category);
	}

	@Override
	public Category findById(Long id) {
		return categoryRepository.findById(id).get();
	}

	@Override
	public List<Category> findAll() {
		return categoryRepository.findAll();
	}
/*
	@Override
	public List<Category> findByModality(Modality modality) {
		return categoryRepository.findByModality(modality);
	}
*/
	@Override
	public void delete(Long id) {
		categoryRepository.deleteById(id);
		
	}

	@Override
	public Category findByName(String name) {
		return categoryRepository.findByName(name);
	}

}
