package com.lokanov.project_lokanov360.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lokanov.project_lokanov360.entity.Role;
import com.lokanov.project_lokanov360.enums.RoleName;
import com.lokanov.project_lokanov360.repository.RoleRepository;

@Service
public class RoleServiceImp implements RoleService{

	@Autowired
	RoleRepository roleRepository;


	@Override
	public Role findById(Long id) {
		return roleRepository.findById(id).get();
	}

	@Override
	public List<Role> findAll() {
		return  roleRepository.findAll();
	}

	@Override
	public Optional<Role> findByName(RoleName name) {
	
		return roleRepository.findByName(name);
	}

	@Override
	public void delete(long id) {
		roleRepository.deleteById(id);
	}

}
