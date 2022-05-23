package com.lokanov.project_lokanov360.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "video")
public class Video {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String url;
	private Long nombrePieces;
	private Long nombreEtages;
	private Long surface;
	private Long priceTaxed;
	@JsonFormat(pattern="yyyy-mm-dd")
	private String dateCreated;
	
	public Video(Long id, String name, String url, Long nombrePieces, Long nombreEtages, Long surface, Long priceTaxed,
			String dateCreated) {
		super();
		this.id = id;
		this.name = name;
		this.url = url;
		this.nombrePieces = nombrePieces;
		this.nombreEtages = nombreEtages;
		this.surface = surface;
		this.priceTaxed = priceTaxed;
		this.dateCreated = dateCreated;
	}
	
	
	public Video() {
		
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	
	
	public Long getId()
	{
		return id;
	}
	
	public void setId(Long id) 
	{
		this.id = id;
	}
	
	public String getName() 
	{
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}


	public Long getNombrePieces() {
		return nombrePieces;
	}


	public void setNombrePieces(Long nombrePieces) {
		this.nombrePieces = nombrePieces;
	}


	public Long getNombreEtages() {
		return nombreEtages;
	}


	public void setNombreEtages(Long nombreEtages) {
		this.nombreEtages = nombreEtages;
	}


	public Long getSurface() {
		return surface;
	}


	public void setSurface(Long surface) {
		this.surface = surface;
	}


	public Long getPriceTaxed() {
		return priceTaxed;
	}


	public void setPriceTaxed(Long priceTaxed) {
		this.priceTaxed = priceTaxed;
	}


	public String getDateCreated() {
		return dateCreated;
	}


	public void setDateCreated(String dateCreated) {
		this.dateCreated = dateCreated;
	}
}
