package com.lokanov.project_lokanov360.service;

import java.util.List;

import com.lokanov.project_lokanov360.entity.Company;
import com.lokanov.project_lokanov360.entity.Lieu;

public interface CompanyService {
	Company save(Company company);
	
	Company findById(Long id);
	
	Company findByName(String name);
	
	List<Company> findAll();
	
	void delete(Long id);

}
