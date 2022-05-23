package com.lokanov.project_lokanov360.service;

import java.util.List;

import com.lokanov.project_lokanov360.entity.Category;
import com.lokanov.project_lokanov360.entity.Modality;

public interface CategoryService {
	
	    Category save(Category category);
		
		Category findById(Long id);
		
		Category findByName(String name);
		
		List<Category> findAll();
		
		//List<Category> findByModality(Modality modality);
		
		void delete(Long id);

}
