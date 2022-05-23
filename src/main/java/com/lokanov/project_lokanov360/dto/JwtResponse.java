package com.lokanov.project_lokanov360.dto;

import java.io.Serializable;
import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

public class JwtResponse implements Serializable {
	
	private static final long serialVersionUID = 1L;
	private String token;
	private String type = "Bearer";
	private String name;
	private String username;
	private String role;
	private Collection<? extends GrantedAuthority> authorities;


	public JwtResponse(String token, String username, String name,  Collection<? extends GrantedAuthority> authorities) {
		this.token = token;
		this.name = name;
		this.username = username;
		this.authorities = authorities;
		
	}
	public JwtResponse(String token, String username, String name) {
		this.token = token;
		this.name = name;
		this.username = username;
		/*this.authorities = authorities;
		this.role = role;*/
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
		this.authorities = authorities;
	}
	
}
