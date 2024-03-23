package com.team.vel.service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetails;

import com.team.vel.dto.UserDto;
import com.team.vel.model.User;

public interface UserService {

    UserDto createUser(UserDto userDto);

    UserDto getUserById(Long userId);

    List<User> getAllUsers();

    UserDto updateUser(Long userId, UserDto userDto);

    void deleteUser(Long userId);

    UserDto addUser(UserDto userDto);
    
    String getUserRoleByUsername(String username);
    // Other methods for updating, deleting, etc. can be added as needed

    long countStudents();
    List<UserDto> getUsersWithSuccessfulPayments();

    List<UserDto> getUsersWithEnrollmentsByUsername(String username);

}
