package com.lokanov.project_lokanov360.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lokanov.project_lokanov360.entity.Company;

public interface CompanyRepository extends JpaRepository<Company, Long> {
         Company findByName(String name);
         
     
}
