package com.lokanov.project_lokanov360.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "user")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long    id;
	private String  firstName;
	private String  name;
	private String  password;
	private String  email;
	
	@ManyToOne
	@JoinColumn(name = "role")
	private Role role;
	@ManyToOne(cascade = {CascadeType.MERGE})
	@JoinColumn(name = "company")
	private Company company;
	
	public User(String firstName, String name, String password, String email) {
		super();
		//this.id = id;
		this.firstName = firstName;
		this.name = name;
		this.password = password;
		this.email = email;
		//this.role = role; this.company = company;
	}

	
	
	public User() {
		
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}
	
	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}


}
