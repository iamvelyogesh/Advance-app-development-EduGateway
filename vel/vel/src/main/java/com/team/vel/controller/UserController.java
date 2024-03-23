package com.team.vel.controller;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
// import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import com.team.vel.dto.AuthRequest;
import com.team.vel.dto.UserDto;
import com.team.vel.model.User;
import com.team.vel.service.JwtService;
import com.team.vel.service.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/new")
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto) {
        UserDto createdUser = userService.addUser(userDto);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable("id") Long userId) {
        UserDto userDto = userService.getUserById(userId);
        return ResponseEntity.ok(userDto);
    }

    // @GetMapping
    // public ResponseEntity<List<User>> getAllUsers() {
    //     List<User> users = userService.getAllUsers();
    //     return ResponseEntity.ok(users);
    // }
    @GetMapping
public ResponseEntity<List<User>> getAllUsersEndpoint() {
    List<User> users = userService.getAllUsers();
    return ResponseEntity.ok(users);
}
    

    @PutMapping("/{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable("id") Long userId, @RequestBody UserDto userDto) {
        UserDto updatedUser = userService.updateUser(userId, userDto);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") Long userId) {
        userService.deleteUser(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @GetMapping("/countStudents")
    public long countStudents() {
        return userService.countStudents();
    }
    
    
    // @PostMapping("/authenticate")
    // public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
    //     Authentication authentication = authenticationManager.authenticate(
    //             new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
    //     if (authentication.isAuthenticated()) {
    //         return jwtService.generateToken(authRequest.getUsername());
    //     } else {
    //         throw new UsernameNotFoundException("invalid user request !");
    //     }
    // }

    @PostMapping("/authenticate")
public ResponseEntity<Map<String, String>> authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
    Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
    if (authentication.isAuthenticated()) {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String token = jwtService.generateToken(authRequest.getUsername());
        String role = userDetails.getAuthorities().stream()
                            .findFirst()
                            .map(GrantedAuthority::getAuthority)
                            .orElse("");
        Map<String, String> response = new HashMap<>();
        response.put("token", token);
        response.put("role", role);
        return ResponseEntity.ok(response);
    } else {
        throw new UsernameNotFoundException("Invalid user request!");
    }
}

// UserController.java
@GetMapping("/usersWithSuccessfulPayments")
public ResponseEntity<List<UserDto>> getUsersWithSuccessfulPayments() {
    List<UserDto> usersWithSuccessfulPayments = userService.getUsersWithSuccessfulPayments();
    return ResponseEntity.ok(usersWithSuccessfulPayments);
}






    @GetMapping("/role/{username}")
public ResponseEntity<String> getUserRoleByUsername(@PathVariable("username") String username) {
    String role = userService.getUserRoleByUsername(username);
    if (role != null) {
        return ResponseEntity.ok(role);
    } else {
        return ResponseEntity.notFound().build();
    }
}

@GetMapping("/enrollments/{username}")
public ResponseEntity<List<UserDto>> getEnrollmentsByUsername(@PathVariable("username") String username) {
    List<UserDto> usersWithEnrollments = userService.getUsersWithEnrollmentsByUsername(username);
    if (usersWithEnrollments != null && !usersWithEnrollments.isEmpty()) {
        return ResponseEntity.ok(usersWithEnrollments);
    } else {
        return ResponseEntity.notFound().build();
    }
}


}
