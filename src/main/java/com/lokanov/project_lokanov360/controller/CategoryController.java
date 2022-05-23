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
import com.lokanov.project_lokanov360.service.CategoryService;
import com.lokanov.project_lokanov360.service.ModalityService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/category")
public class CategoryController {
	
	@Autowired
    CategoryService categoryService;

	
	@PostMapping("/add")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Category> add(@RequestBody Category category)
	{
		
		Category categorys = categoryService.save(category);
		return ResponseEntity.status(HttpStatus.OK).body(categorys);
	}
	
	@GetMapping("/findAll")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<List<Category>>  findAllCategory()
	{
	  List<Category> categorys = categoryService.findAll();
	  return ResponseEntity.status(HttpStatus.OK).body(categorys);
	}
	
	
	@PutMapping("/update/{id}")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Category> update(@RequestBody Category category)
	{
		Category categoryUpdate = categoryService.save(category);
		return ResponseEntity.ok().body(categoryUpdate);
	}
	
	@GetMapping("/findById")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Category> findById(@RequestParam Long id) 
	{
		Category category = categoryService.findById(id);
		return ResponseEntity.status(HttpStatus.OK).body(category);
	}
	
	@GetMapping("/findByName")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Category> findByName(@RequestParam String name) 
	{
		Category category = categoryService.findByName(name);
		return ResponseEntity.status(HttpStatus.OK).body(category);
	}
	/*
	@GetMapping("/findByModality")
	public ResponseEntity<?> findByModality(@RequestParam String name) {
		try {
			Modality modality = modalityService.findByName(name);
			List<Category> categorys = categoryService.findByModality(modality);
			return ResponseEntity.ok(categorys);
		} catch (Exception e) {
			return  new ResponseEntity<>("missing", null, HttpStatus.NOT_FOUND);

		}
	}*/

	 
	@DeleteMapping("/delete/{id}")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Void> deleteCategory(@PathVariable Long id) 
	{	
	  categoryService.delete(id);
	  return ResponseEntity.noContent().build();
	}

}
