package com.lokanov.project_lokanov360.service;

import java.util.List;

import com.lokanov.project_lokanov360.entity.Video;


public interface VideoService {
     
	Video save(Video video);
	
	List<Video> findAll();
	
	Video findById(Long id);
	
	Video findByName(String name);

	void delete(long id);
}
