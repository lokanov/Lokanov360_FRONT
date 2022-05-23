package com.lokanov.project_lokanov360.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.lokanov.project_lokanov360.entity.Category;
import com.lokanov.project_lokanov360.entity.Modality;

@Repository
public interface ModalityRepository extends JpaRepository<Modality, Long>{
	
	Modality findByName(String name);
	 //List<Modality> findModalityByCategory(Category category);
	
	//liste des modalites en fonction du categorie choisit
	//@Query(value = "SELECT modality FROM Modality modality LEFT JOIN modality.category category WHERE category.id = 1", nativeQuery = true)
	//List<Modality> listModalityByCategory();
	
	

}
