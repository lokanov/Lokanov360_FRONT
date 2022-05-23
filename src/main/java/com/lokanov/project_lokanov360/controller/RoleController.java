package com.lokanov.project_lokanov360.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lokanov.project_lokanov360.entity.Role;
import com.lokanov.project_lokanov360.enums.RoleName;
import com.lokanov.project_lokanov360.service.RoleService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/role")
public class RoleController {
	
	@Autowired
    RoleService RoleService;
	
	
	@GetMapping("/findAll")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<List<Role>>  findAllRole()
	{
	  List<Role> Roles = RoleService.findAll();
	  return ResponseEntity.status(HttpStatus.OK).body(Roles);
	}
	
	@GetMapping("/findById")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Role> findById(@RequestParam Long id) 
	{
		Role Role = RoleService.findById(id);
		return ResponseEntity.status(HttpStatus.OK).body(Role);
	}
	
	@GetMapping("/findByName")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Optional<Role>> findByName(@RequestParam RoleName name) 
	{
		Optional<Role> Role = RoleService.findByName(name);
		return ResponseEntity.status(HttpStatus.OK).body(Role);
	}

	 
	@DeleteMapping("/delete/{id}")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Void> deleteRole(@PathVariable Long id) 
	{	
	  RoleService.delete(id);
	  return ResponseEntity.noContent().build();
	}
}