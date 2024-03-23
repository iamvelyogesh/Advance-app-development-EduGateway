package com.team.vel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.team.vel.model.Payment;

@Repository
public interface PaymentRepo extends JpaRepository<Payment, Long> {
    // Additional custom query methods can be added if needed
}
