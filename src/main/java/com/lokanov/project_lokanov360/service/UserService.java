package com.lokanov.project_lokanov360.service;

import java.util.List;

import com.lokanov.project_lokanov360.dto.UserDto;
import com.lokanov.project_lokanov360.entity.Role;
import com.lokanov.project_lokanov360.entity.User;

public interface UserService {
	
	User save(User user);

	List<UserDto> findAll();

	User findById(Long id);

	User findByName(String name);

	List<UserDto> findByRole(Role role);

	void delete(Long id);
	
	User findByEmail(String email);

}
