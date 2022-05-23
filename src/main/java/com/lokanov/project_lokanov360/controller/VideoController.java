package com.lokanov.project_lokanov360.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lokanov.project_lokanov360.entity.Video;
import com.lokanov.project_lokanov360.service.VideoService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/video")
public class VideoController {
	
	@Autowired
    VideoService videoService;
	
	
	@PostMapping("/add")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Video> add(@RequestBody Video video)
	{
		
		Video videos = videoService.save(video);
		return ResponseEntity.status(HttpStatus.OK).body(videos);
	}
	
	@GetMapping("/findAll")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<List<Video>>  findAllVideo()
	{
	  List<Video> videos = videoService.findAll();
	  return ResponseEntity.status(HttpStatus.OK).body(videos);
	}
	
	
	@PutMapping("/update/{id}")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Video> update(@RequestBody Video video)
	{
		Video videoUpdate = videoService.save(video);
		return ResponseEntity.ok().body(videoUpdate);
	}
	
	@GetMapping("/findById")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Video> findById(@RequestParam Long id) 
	{
		Video video = videoService.findById(id);
		return ResponseEntity.status(HttpStatus.OK).body(video);
	}
	
	@GetMapping("/findByName")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Video> findByName(@RequestParam String name) 
	{
		Video video = videoService.findByName(name);
		return ResponseEntity.status(HttpStatus.OK).body(video);
	}

	 
	@DeleteMapping("/delete/{id}")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Void> deleteVideo(@PathVariable Long id) 
	{	
	  videoService.delete(id);
	  return ResponseEntity.noContent().build();
	}
}
