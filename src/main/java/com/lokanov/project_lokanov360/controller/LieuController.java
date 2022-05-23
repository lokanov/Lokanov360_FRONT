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

import com.lokanov.project_lokanov360.entity.Lieu;
import com.lokanov.project_lokanov360.service.LieuService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/lieu")
public class LieuController {
	
	@Autowired
    LieuService lieuService;
	
	
	@PostMapping("/add")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Lieu> add(@RequestBody Lieu lieu)
	{
		
		Lieu lieus = lieuService.save(lieu);
		return ResponseEntity.status(HttpStatus.OK).body(lieus);
	}
	
	@GetMapping("/findAll")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<List<Lieu>>  findAllLieu()
	{
	  List<Lieu> lieus = lieuService.findAll();
	  return ResponseEntity.status(HttpStatus.OK).body(lieus);
	}
	
	
	@PutMapping("/update/{id}")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Lieu> update(@RequestBody Lieu lieu)
	{
		Lieu lieuUpdate = lieuService.save(lieu);
		return ResponseEntity.ok().body(lieuUpdate);
	}
	
	@GetMapping("/findById")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Lieu> findById(@RequestParam Long id) 
	{
		Lieu lieu = lieuService.findById(id);
		return ResponseEntity.status(HttpStatus.OK).body(lieu);
	}
	
	@GetMapping("/findByName")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Lieu> findByName(@RequestParam String name) 
	{
		Lieu lieu = lieuService.findByName(name);
		return ResponseEntity.status(HttpStatus.OK).body(lieu);
	}

	 
	@DeleteMapping("/delete/{id}")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Void> deleteLieu(@PathVariable Long id) 
	{	
	  lieuService.delete(id);
	  return ResponseEntity.noContent().build();
	}

}
