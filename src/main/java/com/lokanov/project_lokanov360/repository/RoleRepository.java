package com.lokanov.project_lokanov360.repository;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lokanov.project_lokanov360.entity.Role;
import com.lokanov.project_lokanov360.enums.RoleName;



@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	
       Optional<Role> findByName(RoleName name);

}
