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
@Table(name = "company")
public class Company {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String adress;
	private String phone;
	private String email;
	private String personContact;
	//private Long numberVisitAutorised;
	@ManyToOne(cascade = {CascadeType.MERGE})
	@JoinColumn(name = "abonnement")
	private Abonnement abonnement;
	
	
	public Company() {
		
	}


	public Company(Long id, String name, String adress, String email, String phone, String personContact,
			Abonnement abonnement) {
		super();
		this.id = id;
		this.name = name;
		this.adress = adress;
		this.email = email;
		this.phone = phone;
		this.personContact = personContact;
		//this.numberVisitAutorised = numberVisitAutorised;
		this.abonnement = abonnement;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getAdress() {
		return adress;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


	public void setAdress(String adress) {
		this.adress = adress;
	}


	public String getPersonContact() {
		return personContact;
	}


	public void setPersonContact(String personContact) {
		this.personContact = personContact;
	}

	public Abonnement getAbonnement() {
		return abonnement;
	}


	public void setAbonnement(Abonnement abonnement) {
		this.abonnement = abonnement;
	}
	
	
}
	