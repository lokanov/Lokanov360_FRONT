package com.lokanov.project_lokanov360.service;

import java.util.List;

import com.lokanov.project_lokanov360.entity.Category;
import com.lokanov.project_lokanov360.entity.Visit;

public interface VisiteService {
	
    Visit save(Visit visit);
	
	Visit findById(Long id);
	
	List<Visit> findAll();
	
	List<Visit> findByCategory(Category category);
	
	void delete(Long id);

}
