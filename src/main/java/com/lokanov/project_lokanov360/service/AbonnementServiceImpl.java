package com.lokanov.project_lokanov360.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lokanov.project_lokanov360.entity.Abonnement;
import com.lokanov.project_lokanov360.repository.AbonnementRepository;

@Service
public class AbonnementServiceImpl  implements AbonnementService{

	
	@Autowired
	 AbonnementRepository abonnementRepository;
      	
	
	@Override
	public Abonnement save(Abonnement abonnement) {
		return abonnementRepository.save(abonnement);
	}

	@Override
	public Abonnement findById(Long id) {
	    return abonnementRepository.findById(id).get();
	}

	@Override
	public Abonnement findByName(String name) {
		return abonnementRepository.findByName(name);
	}

	@Override
	public List<Abonnement> findAll() {
		return abonnementRepository.findAll();
	}

	@Override
	public void delete(Long id) {
	    abonnementRepository.deleteById(id);
		
	}

}
