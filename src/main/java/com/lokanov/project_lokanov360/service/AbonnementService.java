package com.lokanov.project_lokanov360.service;

import java.util.List;

import com.lokanov.project_lokanov360.entity.Abonnement;

public interface AbonnementService {
	Abonnement save(Abonnement abonnement);
	
	Abonnement findById(Long id);
	
	Abonnement findByName(String name);
	
	List<Abonnement> findAll();
	
	void delete(Long id);
}
