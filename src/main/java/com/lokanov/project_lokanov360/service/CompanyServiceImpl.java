package com.lokanov.project_lokanov360.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lokanov.project_lokanov360.entity.Company;
import com.lokanov.project_lokanov360.repository.CompanyRepository;

@Service
public class CompanyServiceImpl  implements CompanyService{
    @Autowired
    CompanyRepository companyRepository;
    
	@Override
	public Company save(Company company) {
		return companyRepository.save(company);
	}

	@Override
	public Company findById(Long id) {
		return companyRepository.findById(id).get();
	}

	@Override
	public Company findByName(String name) {
		return companyRepository.findByName(name);
	}

	@Override
	public List<Company> findAll() {
		return companyRepository.findAll();
	}

	@Override
	public void delete(Long id) {
	companyRepository.deleteById(id);
		
	}

}
