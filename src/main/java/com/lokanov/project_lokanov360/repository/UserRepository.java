package com.lokanov.project_lokanov360.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lokanov.project_lokanov360.entity.Role;
import com.lokanov.project_lokanov360.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmail(String email);

	List<User> findByRole(Role role);

	User findByName(String name);
}
