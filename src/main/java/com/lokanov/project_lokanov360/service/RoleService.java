package com.lokanov.project_lokanov360.service;

import java.util.List;
import java.util.Optional;

import com.lokanov.project_lokanov360.entity.Role;
import com.lokanov.project_lokanov360.enums.RoleName;

public interface RoleService {
	
	List<Role> findAll();
	
	Role findById(Long id);
	
	void delete(long id);

	Optional<Role> findByName(RoleName name);

}
