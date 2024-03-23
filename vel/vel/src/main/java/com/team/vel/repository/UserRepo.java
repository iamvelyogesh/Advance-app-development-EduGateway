package com.team.vel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.team.vel.model.User;

import java.util.List;
import java.util.Optional;


@Repository
public interface UserRepo extends JpaRepository<User, Long>, CrudRepository<User, Long> {
    
    Optional<User> findByUsername(String username);

    @Query("SELECT COUNT(userId) FROM User WHERE userRole = 'student'")
    long countStudents();

    @Query("SELECT DISTINCT u FROM User u JOIN FETCH u.enrollments e WHERE e.payment = 'success'")
    List<User> findUsersWithSuccessfulPayments();
}
