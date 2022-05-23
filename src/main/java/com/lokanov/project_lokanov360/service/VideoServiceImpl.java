package com.lokanov.project_lokanov360.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lokanov.project_lokanov360.entity.Video;
import com.lokanov.project_lokanov360.repository.VideoRepository;

@Service
public class VideoServiceImpl  implements  VideoService {
	
	@Autowired
	VideoRepository videoRepository;

	@Override
	public Video save(Video video) {
		return videoRepository.save(video);
	}

	@Override
	public Video findById(Long id) {
		return  videoRepository.findById(id).get();
	}

	@Override
	public List<Video> findAll() {
		return videoRepository.findAll();
	}

	@Override
	public Video findByName(String name) {
	
		return videoRepository.findByName(name);
	}

	@Override
	public void delete(long id) {
		videoRepository.deleteById(id);
		
	}
	
	
	
	
	
}
