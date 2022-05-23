package com.lokanov.project_lokanov360.service;

import java.util.List;

import com.lokanov.project_lokanov360.entity.Modality;

public interface ModalityService {
	
	    Modality save(Modality modality);
		
		Modality findById(Long id);
		
		Modality findByName(String name);
		
		List<Modality> findAll();
		
		void delete(Long id);

}
