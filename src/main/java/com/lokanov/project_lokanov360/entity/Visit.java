package com.lokanov.project_lokanov360.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonRootName;

@Entity
@Table(name = "visit")
public class Visit {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long   id;
	private String numberReference; 
	private String titre;
	private String address;
	private String description;
	private Long   price;
	@JsonFormat(pattern="yyyy-mm-dd")
	private String dateCreated;
	
	
	@ManyToOne(cascade = {CascadeType.MERGE})
	@JoinColumn(name = "video")
	private Video video;
	
	@ManyToOne(cascade = {CascadeType.MERGE})
	@JoinColumn(name = "category")
	private Category category;

	@ManyToOne(cascade = {CascadeType.MERGE})
	@JoinColumn(name = "modality")
	private Modality modality;
	

	@ManyToOne(cascade = {CascadeType.MERGE})
	@JoinColumn(name = "lieu")
	private Lieu lieu;
	
	/*@ManyToOne(cascade = {CascadeType.ALL})
	@JoinColumn(name = "visitValidation")
	private VisitValidation visitValidation ;
	*/
	
	
	public Visit()
	{
		
	}

	public Visit(Long id, String numberReference, String titre, String address, String description, Long price,
			Video video, Category category, Modality modality, Lieu lieu,String dateCreated) {
		super();
		this.id = id;
		this.numberReference = numberReference;
		this.titre = titre;
		this.address = address;
		this.description = description;
		this.price = price;
		this.video = video;
		this.category = category;
		this.modality = modality;
		this.lieu = lieu;
		this.dateCreated = dateCreated;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNumberReference() {
		return numberReference;
	}

	public void setNumberReference(String numberReference) {
		this.numberReference = numberReference;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Long getPrice() {
		return price;
	}

	public void setPrice(Long price) {
		this.price = price;
	}

	public Video getVideo() {
		return video;
	}

	public void setVideo(Video video) {
		this.video = video;
	}
	
	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Modality getModality() {
		return modality;
	}

	public void setModality(Modality modality) {
		this.modality = modality;
	}

	public Lieu getLieu() {
		return lieu;
	}

	public void setLieu(Lieu lieu) {
		this.lieu = lieu;
	}

	public String getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(String dateCreated) {
		this.dateCreated = dateCreated;
	}
	

}
