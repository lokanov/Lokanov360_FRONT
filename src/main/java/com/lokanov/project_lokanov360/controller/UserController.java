package com.lokanov.project_lokanov360.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
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

import com.lokanov.project_lokanov360.dto.UserDto;
import com.lokanov.project_lokanov360.entity.User;
import com.lokanov.project_lokanov360.service.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	PasswordEncoder encoder;

	@Autowired
	UserService userService;
	
	
	@PostMapping("/add")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<User> add(@RequestBody User user)
	{
		User users = userService.save(user);
		return ResponseEntity.status(HttpStatus.OK).body(users);
	}
	
	// La liste de tous les utilisateurs
	@GetMapping("/findAll")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<List<UserDto>> findAll() {
		List<UserDto> users = userService.findAll();
		if (null == users) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
		}
		return ResponseEntity.status(HttpStatus.OK).body(users);
	}

	// Utilisateur par id
	@GetMapping("/findById/{id}")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<User> findById(@PathVariable Long id) {
		User user = userService.findById(id);
		if (null == user) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
		}
		return ResponseEntity.status(HttpStatus.OK).body(user);
	}
	// utlisateur par email
	@GetMapping("/findByEmail")
	public ResponseEntity<User> findByEmail(@RequestParam String email) {
		User user = userService.findByEmail(email);
		if (null == user) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
		}
		return ResponseEntity.status(HttpStatus.OK).body(user);
	}

	// Utilisateur par nom
	@GetMapping("/findByName/{name}")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<?> findByName(@PathVariable String name) {
		User user = userService.findByName(name);
		if (null == user) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
		}
		return ResponseEntity.status(HttpStatus.OK).body(user);
	}


	// supprimer user
	@DeleteMapping("/delete/{id}")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
		userService.delete(id);
    	return ResponseEntity.noContent().build();
	}

	// Update User
	@PutMapping("/updateUser")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<User> updateUser(@RequestBody User user) {
		User userUpdate = userService.save(user);
		return ResponseEntity.status(HttpStatus.OK).body(userUpdate);
	}
}
