package com.team.vel.mapper;

import com.team.vel.dto.UserDto;
import com.team.vel.model.User;

public class UserMapper {

    public static UserDto mapToUserDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setUserId(user.getUserId());
        userDto.setEmail(user.getEmail());
        userDto.setPassword(user.getPassword());
        userDto.setUsername(user.getUsername());
        userDto.setMobileNumber(user.getMobileNumber());
        userDto.setUserRole(user.getUserRole());
        return userDto;
    }

    public static User mapToUser(UserDto userDto) {
        User user = new User();
        user.setUserId(userDto.getUserId());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        user.setUsername(userDto.getUsername());
        user.setMobileNumber(userDto.getMobileNumber());
        user.setUserRole(userDto.getUserRole());
        return user;
    }
}
