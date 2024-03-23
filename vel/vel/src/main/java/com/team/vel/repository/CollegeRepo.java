package com.team.vel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.team.vel.model.College;

@Repository
public interface CollegeRepo extends JpaRepository<College, Long> {
    // Additional custom query methods can be added if needed
}
