package com.lokanov.project_lokanov360.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lokanov.project_lokanov360.dto.UserDto;
import com.lokanov.project_lokanov360.entity.Role;
import com.lokanov.project_lokanov360.entity.User;
import com.lokanov.project_lokanov360.helper.UserHelper;
import com.lokanov.project_lokanov360.repository.UserRepository;


@Service
public class UserServiceImpl  implements UserService{
	
	@Autowired
	public UserRepository userRepository;
	UserHelper userHelper = new UserHelper();
	// = Mappers.getMapper(UserMapper.class);
    
	
	@Override
	public User save(User user) {
		return userRepository.save(user);
	}

	@Override
	public List<UserDto> findAll() {
		List<User> users = (List<User>) userRepository.findAll();
		return userHelper.toUserDtos(users);
		//return userMapper.toUserDtos(users);
	}

	@Override
	public User findById(Long id) {
		return userRepository.findById(id).get();
	}

	@Override
	public User findByName(String name) {
		return userRepository.findByName(name);
	}

	@Override
	public List<UserDto> findByRole(Role role) {
		List<User> users = userRepository.findByRole(role);
		return userHelper.toUserDtos(users);
	}

	@Override
	public void delete(Long id) {
		userRepository.deleteById(id);
	}

	@Override
	public User findByEmail(String email) {
		return userRepository.findByEmail(email);
	}

}

