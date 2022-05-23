package com.lokanov.project_lokanov360.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lokanov.project_lokanov360.entity.Lieu;
import com.lokanov.project_lokanov360.repository.LieuRepository;

@Service
public class LieuServiceImp  implements LieuService{
	
	@Autowired
	LieuRepository lieuRepository;

	@Override
	public Lieu save(Lieu lieu) {
		return  lieuRepository.save(lieu);
	}

	@Override
	public Lieu findById(Long id) {
		return lieuRepository.findById(id).get();
	}

	@Override
	public Lieu findByName(String name) {
		return lieuRepository.findByName(name);
	}

	@Override
	public List<Lieu> findAll() {
		return lieuRepository.findAll();
	}

	@Override
	public void delete(Long id) {
		lieuRepository.deleteById(id);
		
	}

}
