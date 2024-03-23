package com.team.vel.service.impl;

import lombok.AllArgsConstructor;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.team.vel.dto.EnrollmentDto;
import com.team.vel.dto.UserDto;
import com.team.vel.exception.UserNotFoundException;
import com.team.vel.mapper.UserMapper;
import com.team.vel.model.Enrollment;
import com.team.vel.model.User;
import com.team.vel.repository.UserRepo;
import com.team.vel.service.UserService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDto createUser(UserDto userDto) {
        User user = UserMapper.mapToUser(userDto);
        User savedUser = userRepo.save(user);
        return UserMapper.mapToUserDto(savedUser);
    }

    @Override
    public UserDto getUserById(Long userId) {
        Optional<User> optionalUser = userRepo.findById(userId);
        User user = optionalUser.orElseThrow(() ->
                new UserNotFoundException("User not found with id: " + userId));
        return UserMapper.mapToUserDto(user);
    }

    @Override
    public List<User> getAllUsers() {
        List<User> users = userRepo.findAll();
        return users;
        // return UserRepo.findAll();
    }

    @Override
    public UserDto updateUser(Long userId, UserDto userDto) {
        Optional<User> optionalUser = userRepo.findById(userId);
        User existingUser = optionalUser.orElseThrow(() ->
                new UserNotFoundException("User not found with id: " + userId));

        // Update fields with values from UserDto
        existingUser.setEmail(userDto.getEmail());
        existingUser.setPassword(userDto.getPassword());
        existingUser.setUsername(userDto.getUsername());
        existingUser.setMobileNumber(userDto.getMobileNumber());
        existingUser.setUserRole(userDto.getUserRole());
        // Add more fields as needed

        // Save the updated entity back to the repository
        User updatedUser = userRepo.save(existingUser);
        return UserMapper.mapToUserDto(updatedUser);
    }

    @Override
    public void deleteUser(Long userId) {
        userRepo.deleteById(userId);
    }

    public long countStudents() {
        return userRepo.countStudents();
    }

    // public String addUser(UserDto userDto) {
        //     // TODO Auto-generated method stub
        //     throw new UnsupportedOperationException("Unimplemented method 'addUser'");
        // }
    @Override
    public UserDto addUser(UserDto userInfo) {
        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
        User k=UserMapper.mapToUser(userInfo);
        User ans=userRepo.save(k);
        return UserMapper.mapToUserDto(ans);
    }

    @Override
    public String getUserRoleByUsername(String username) {
        Optional<User> optionalUser = userRepo.findByUsername(username);
        User user = optionalUser.orElseThrow(() ->
                new UserNotFoundException("User not found with username: " + username));
        return user.getUserRole();
    }

    @Override
public List<UserDto> getUsersWithSuccessfulPayments() {
    List<User> usersWithSuccessfulPayments = userRepo.findUsersWithSuccessfulPayments();
    return usersWithSuccessfulPayments.stream()
            .map(UserMapper::mapToUserDto)
            .collect(Collectors.toList());
}

@Override
    public List<UserDto> getUsersWithEnrollmentsByUsername(String username) {
        return userRepo.findByUsername(username)
                .stream()
                .map(this::mapToDtoWithEnrollments)
                .collect(Collectors.toList());
    }

    private UserDto mapToDtoWithEnrollments(User user) {
        UserDto userDto = new UserDto();
        // Map basic user details
        userDto.setUserId(user.getUserId());
        userDto.setUsername(user.getUsername());
        userDto.setEmail(user.getEmail());
        userDto.setMobileNumber(user.getMobileNumber());
        userDto.setUserRole(user.getUserRole());
        userDto.setPassword(user.getPassword());
        
        // Map enrollments
        List<EnrollmentDto> enrollmentDtos = user.getEnrollments()
                .stream()
                .map(this::mapEnrollmentToDto)
                .collect(Collectors.toList());
        userDto.setEnrollments(enrollmentDtos);
        
        return userDto;
    }

    private EnrollmentDto mapEnrollmentToDto(Enrollment enrollment) {
        EnrollmentDto enrollmentDto = new EnrollmentDto();
        enrollmentDto.setId(enrollment.getId());
        enrollmentDto.setApplicationId(enrollment.getApplicationId());
        enrollmentDto.setStudentName(enrollment.getStudentName() != null ? enrollment.getStudentName() : "");
        enrollmentDto.setStudentMail(enrollment.getStudentMail() != null ? enrollment.getStudentMail() : "");
        enrollmentDto.setStudentPhoneNumber(enrollment.getStudentPhoneNumber() != null ? enrollment.getStudentPhoneNumber() : "");
        enrollmentDto.setTwelfthMarks(enrollment.getTwelfthMarks() != null ? enrollment.getTwelfthMarks() : "");
        enrollmentDto.setCollegeName(enrollment.getCollegeName() != null ? enrollment.getCollegeName() : "");
        enrollmentDto.setLocation(enrollment.getLocation() != null ? enrollment.getLocation() : "");
        enrollmentDto.setCourseName(enrollment.getCourseName() != null ? enrollment.getCourseName() : "");
        enrollmentDto.setCourseCode(enrollment.getCourseCode() != null ? enrollment.getCourseCode() : "");
        enrollmentDto.setAadharNumber(enrollment.getAadharNumber() != null ? enrollment.getAadharNumber() : "");
        enrollmentDto.setStage(enrollment.getStage() != null ? enrollment.getStage() : "");
        enrollmentDto.setPayment(enrollment.getPayment() != null ? enrollment.getPayment() : "");
        // Map other fields as needed
        return enrollmentDto;
    }
    
    


    // Other methods for updating, deleting, etc. can be added as needed
}
