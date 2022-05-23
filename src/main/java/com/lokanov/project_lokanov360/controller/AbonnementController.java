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

import com.lokanov.project_lokanov360.entity.Abonnement;
import com.lokanov.project_lokanov360.service.AbonnementService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/abonnement")
public class AbonnementController {

	
	@Autowired
	AbonnementService abonnementService;
	
	
	@PostMapping("/add")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Abonnement> add(@RequestBody Abonnement abonnement)
	{
		
		Abonnement abonnements = abonnementService.save(abonnement);
		return ResponseEntity.status(HttpStatus.OK).body(abonnements);
	}
	
	@GetMapping("/findAll")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<List<Abonnement>>  findAllAbonnement()
	{
	  List<Abonnement> abonnements = abonnementService.findAll();
	  return ResponseEntity.status(HttpStatus.OK).body(abonnements);
	}
	
	
	@PutMapping("/update/{id}")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Abonnement> update(@RequestBody Abonnement abonnement)
	{
		Abonnement abonnementUpdate = abonnementService.save(abonnement);
		return ResponseEntity.ok().body(abonnementUpdate);
	}
	
	@GetMapping("/findById")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Abonnement> findById(@RequestParam Long id) 
	{
		Abonnement abonnement = abonnementService.findById(id);
		return ResponseEntity.status(HttpStatus.OK).body(abonnement);
	}
	
	@GetMapping("/findByName")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Abonnement> findByName(@RequestParam String name) 
	{
		Abonnement abonnement = abonnementService.findByName(name);
		return ResponseEntity.status(HttpStatus.OK).body(abonnement);
	}

	 
	@DeleteMapping("/delete/{id}")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Void> deleteAbonnement(@PathVariable Long id) 
	{	
	  abonnementService.delete(id);
	  return ResponseEntity.noContent().build();
	}

}
