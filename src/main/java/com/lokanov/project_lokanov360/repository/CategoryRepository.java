package com.lokanov.project_lokanov360.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lokanov.project_lokanov360.entity.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
	
	Category findByName(String name);
	//List<Category> findByModality(Modality modality);

}
