package com.lokanov.project_lokanov360.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lokanov.project_lokanov360.entity.Category;
import com.lokanov.project_lokanov360.entity.Visit;
import com.lokanov.project_lokanov360.repository.VisitRepository;

@Service
public class VisiteServiceImpl  implements VisiteService{

	@Autowired
	VisitRepository visitRepository;
	
	@Override
	public Visit save(Visit visit) {
		return visitRepository.save(visit);
	}

	@Override
	public Visit findById(Long id) 
	{
		return visitRepository.findById(id).get();
	}

	@Override
	public List<Visit> findAll()
	{
		return visitRepository.findAll();
	}

	@Override
	public void delete(Long id) 
	{
		visitRepository.deleteById(id);
	}

	@Override
	public List<Visit> findByCategory(Category category) {
		return visitRepository.findByCategory(category);
	}
}
