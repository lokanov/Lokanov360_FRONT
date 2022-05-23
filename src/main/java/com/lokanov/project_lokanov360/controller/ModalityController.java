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

import com.lokanov.project_lokanov360.entity.Modality;
import com.lokanov.project_lokanov360.service.ModalityService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/modality")
public class ModalityController {
	
	@Autowired
    ModalityService modalityService;
	
	
	@PostMapping("/add")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Modality> add(@RequestBody Modality modality)
	{
		
		Modality modalitys = modalityService.save(modality);
		return ResponseEntity.status(HttpStatus.OK).body(modalitys);
	}
	
	@GetMapping("/findAll")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<List<Modality>>  findAllModality()
	{
	  List<Modality> modalitys = modalityService.findAll();
	  return ResponseEntity.status(HttpStatus.OK).body(modalitys);
	}
	
	@PutMapping("/update/{id}")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Modality> update(@RequestBody Modality modality)
	{
		Modality modalityUpdate = modalityService.save(modality);
		return ResponseEntity.ok().body(modalityUpdate);
	}
	
	@GetMapping("/findById")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Modality> findById(@RequestParam Long id) 
	{
		Modality modality = modalityService.findById(id);
		return ResponseEntity.status(HttpStatus.OK).body(modality);
	}
	
	@GetMapping("/findByName")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Modality> findByName(@RequestParam String name) 
	{
		Modality modality = modalityService.findByName(name);
		return ResponseEntity.status(HttpStatus.OK).body(modality);
	}

	 
	@DeleteMapping("/delete/{id}")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Void> deleteModality(@PathVariable Long id) 
	{	
	  modalityService.delete(id);
	  return ResponseEntity.noContent().build();
	}
	
}
