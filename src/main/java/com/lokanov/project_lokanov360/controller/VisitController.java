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

import com.lokanov.project_lokanov360.entity.Category;
import com.lokanov.project_lokanov360.entity.Modality;
import com.lokanov.project_lokanov360.entity.Visit;
import com.lokanov.project_lokanov360.service.CategoryService;
import com.lokanov.project_lokanov360.service.VisiteService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/visit")
public class VisitController {

	
	@Autowired
	VisiteService visitService;
	
	@Autowired
	CategoryService categoryService;
	
	@PostMapping("/add")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Visit> add(@RequestBody Visit visit)
	{
		Visit visits = visitService.save(visit);
		return ResponseEntity.status(HttpStatus.OK).body(visits);
	}
	
	@GetMapping("/findAll")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<List<Visit>>  findAllVisit()
	{
	  List<Visit> visits = visitService.findAll();
	  return ResponseEntity.status(HttpStatus.OK).body(visits);
	}
	
	
	@PutMapping("/update/{id}")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Visit> update(@RequestBody Visit visit)
	{
		Visit visitUpdate = visitService.save(visit);
		return ResponseEntity.ok().body(visitUpdate);
	}
	
	@GetMapping("/findById")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Visit> findById(@RequestParam Long id) 
	{
		Visit visit = visitService.findById(id);
		return ResponseEntity.status(HttpStatus.OK).body(visit);
	}
	
	@GetMapping("/findByCategory")
	public ResponseEntity<?> findByCategory(@RequestParam String name) {
		try {
			Category category = categoryService.findByName(name);
			List<Visit> visits = visitService.findByCategory(category);
			return ResponseEntity.ok(visits);
		} catch (Exception e) {
			return  new ResponseEntity<>("missing", null, HttpStatus.NOT_FOUND);

		}
	}


	 
	@DeleteMapping("/delete/{id}")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Void> deleteVisit(@PathVariable Long id) 
	{	
	  visitService.delete(id);
	  return ResponseEntity.noContent().build();
	}
	
	
}
