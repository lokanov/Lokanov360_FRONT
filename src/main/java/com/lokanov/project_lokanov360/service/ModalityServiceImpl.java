package com.lokanov.project_lokanov360.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lokanov.project_lokanov360.entity.Modality;
import com.lokanov.project_lokanov360.repository.ModalityRepository;

@Service
public class ModalityServiceImpl implements ModalityService {
	
	@Autowired
	ModalityRepository modalityRepository;

	@Override
	public Modality save(Modality modality) {
		return modalityRepository.save(modality);
	}

	@Override
	public Modality findById(Long id) {
		return modalityRepository.findById(id).get();
	}

	@Override
	public Modality findByName(String name) {
		return modalityRepository.findByName(name);
	}

	@Override
	public List<Modality> findAll() {
		return modalityRepository.findAll();
	}

	@Override
	public void delete(Long id) {
		modalityRepository.deleteById(id);
		
	}

}