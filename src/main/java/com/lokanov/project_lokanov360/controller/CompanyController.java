package com.lokanov.project_lokanov360.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lokanov.project_lokanov360.entity.Company;
import com.lokanov.project_lokanov360.service.CompanyService;
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/company")
public class CompanyController {

	
	@Autowired
    CompanyService companyService;
	
	
	@PostMapping("/add")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Company> add(@RequestBody Company company)
	{
		
		Company companys = companyService.save(company);
		return ResponseEntity.status(HttpStatus.OK).body(companys);
	}
	
	@GetMapping("/findAll")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<List<Company>>  findAllCompany()
	{
	  List<Company> companys = companyService.findAll();
	  return ResponseEntity.status(HttpStatus.OK).body(companys);
	}
	
	
	@PutMapping("/update/{id}")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Company> update(@RequestBody Company company)
	{
		Company companyUpdate = companyService.save(company);
		return ResponseEntity.ok().body(companyUpdate);
	}
	
	@GetMapping("/findById")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Company> findById(@RequestParam Long id) 
	{
		Company company = companyService.findById(id);
		return ResponseEntity.status(HttpStatus.OK).body(company);
	}
	
	@GetMapping("/findByName")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Company> findByName(@RequestParam String name) 
	{
		Company company = companyService.findByName(name);
		return ResponseEntity.status(HttpStatus.OK).body(company);
	}

	 
	@DeleteMapping("/delete/{id}")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Void> deleteCompany(@PathVariable Long id) 
	{	
	  companyService.delete(id);
	  return ResponseEntity.noContent().build();
	}
}
