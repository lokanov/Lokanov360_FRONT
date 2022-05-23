package com.lokanov.project_lokanov360.service;

import java.util.List;

import com.lokanov.project_lokanov360.entity.Lieu;

public interface LieuService {

	    Lieu save(Lieu lieu);
		
		Lieu findById(Long id);
		
		Lieu findByName(String name);
		
		List<Lieu> findAll();
		
		void delete(Long id);

}
