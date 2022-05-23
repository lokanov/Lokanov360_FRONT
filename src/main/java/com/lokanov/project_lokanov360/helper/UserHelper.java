package com.lokanov.project_lokanov360.helper;

import java.util.ArrayList;
import java.util.List;

import com.lokanov.project_lokanov360.dto.UserDto;
import com.lokanov.project_lokanov360.entity.User;

public class UserHelper {
	
	
public UserHelper() {
		
	}
	public UserDto toUserDto(User user) {
		if (user == null) {
			return null;
		}
		

		UserDto userDto = new UserDto();

		userDto.setEmail(user.getEmail());
		userDto.setFirstName(user.getFirstName());
		userDto.setId(user.getId());
		userDto.setName(user.getName());
		userDto.setRole(user.getRole().getName().name());
		return userDto;
		
	}

	
	public List<UserDto> toUserDtos(List<User> users) {
		if (users == null) {
			return null;
		}

		List<UserDto> list = new ArrayList<UserDto>(users.size());
		for (User user : users) {
			list.add(toUserDto(user));
		}

		return list;
	}


	public User toUser(UserDto userDto) {
		if (userDto == null) {
			return null;
		}

		User user = new User();

		user.setEmail(userDto.getEmail());
		user.setFirstName(userDto.getFirstName());
		user.setId(userDto.getId());
		user.setName(userDto.getName());
//		user.setRole(userDto.getRoleName());

		return user;
	}

}
