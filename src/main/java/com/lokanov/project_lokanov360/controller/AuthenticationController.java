package com.lokanov.project_lokanov360.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lokanov.project_lokanov360.repository.UserRepository;
import com.lokanov.project_lokanov360.service.UserPrinciple;
import com.lokanov.project_lokanov360.repository.RoleRepository;
import com.lokanov.project_lokanov360.config.JwtToken;
import com.lokanov.project_lokanov360.dto.JwtResponse;
import com.lokanov.project_lokanov360.dto.LoginDto;
import com.lokanov.project_lokanov360.dto.UserDto;
import com.lokanov.project_lokanov360.entity.Role;
import com.lokanov.project_lokanov360.entity.User;
import com.lokanov.project_lokanov360.enums.RoleName;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/auth")
public class AuthenticationController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtToken jwtToken;

	@PostMapping("/signup")
	public ResponseEntity<String> registerUser(@Valid @RequestBody UserDto userDto) {
		if (userRepository.findByEmail(userDto.getEmail()) != null) {
			return new ResponseEntity<String>("Fail -> The user is already exist !", HttpStatus.BAD_REQUEST);
		}

		User user = new User(userDto.getFirstName(), userDto.getName(), encoder.encode(userDto.getPassword()),
				userDto.getEmail() );

		switch (userDto.getRole()) {
		case "admin":
			Role adminRole = roleRepository.findByName(RoleName.ROLE_ADMIN)
					.orElseThrow(() -> new RuntimeException("Fail! -> Cause: Admin Role not find."));
			user.setRole(adminRole);
			break;
		case "partenaire":
			Role prestaRole = roleRepository.findByName(RoleName.ROLE_PRESTA)
					.orElseThrow(() -> new RuntimeException("Fail! -> Cause: Presta Role not find."));
			user.setRole(prestaRole);

			break;
		default:
			Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
			user.setRole(userRole);
		}
		userRepository.save(user);

		return ResponseEntity.ok().body("User registered successfully!");
	}

	@PostMapping("/signin")
	
	public ResponseEntity<?> authenticate(@RequestBody LoginDto loginRequest) throws Exception {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);

		final String token = jwtToken.generateToken(authentication);

		UserPrinciple userPrincipal = (UserPrinciple) authentication.getPrincipal();
		System.out.println(jwtToken.getUserRoleFromToken(token));
		return ResponseEntity.ok(new JwtResponse(token, jwtToken.getUsernameFromToken(token), userPrincipal.getUser(),
				userPrincipal.getAuthorities()));
	}
	
	@PostMapping("/connect")
	
	public ResponseEntity<?> connection( String email, String password) throws Exception {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(email,password));

		SecurityContextHolder.getContext().setAuthentication(authentication);

		final String token = jwtToken.generateToken(authentication);

		UserPrinciple userPrincipal = (UserPrinciple) authentication.getPrincipal();

		return ResponseEntity.ok(new JwtResponse(token, jwtToken.getUsernameFromToken(token), userPrincipal.getUser(),
				userPrincipal.getAuthorities()));

	}
}