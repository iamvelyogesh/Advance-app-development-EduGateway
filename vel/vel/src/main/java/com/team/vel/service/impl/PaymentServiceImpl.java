package com.team.vel.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import com.team.vel.dto.PaymentDto;
import com.team.vel.exception.PaymentNotFoundException;
import com.team.vel.mapper.PaymentMapper;
import com.team.vel.model.Payment;
import com.team.vel.repository.PaymentRepo;
import com.team.vel.service.PaymentService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepo paymentRepo;

    @Override
    public PaymentDto createPayment(PaymentDto paymentDto) {
        Payment payment = PaymentMapper.mapToPayment(paymentDto);
        Payment savedPayment = paymentRepo.save(payment);
        return PaymentMapper.mapToPaymentDto(savedPayment);
    }

    @Override
    public PaymentDto getPaymentById(Long paymentId) {
        Optional<Payment> optionalPayment = paymentRepo.findById(paymentId);
        Payment payment = optionalPayment.orElseThrow(() ->
                new PaymentNotFoundException("Payment not found with id: " + paymentId));
        return PaymentMapper.mapToPaymentDto(payment);
    }

    @Override
    public List<PaymentDto> getAllPayments() {
        List<Payment> payments = paymentRepo.findAll();
        return payments.stream()
                .map(PaymentMapper::mapToPaymentDto)
                .collect(Collectors.toList());
    }

    @Override
    public PaymentDto updatePayment(Long paymentId, PaymentDto paymentDto) {
        Optional<Payment> optionalPayment = paymentRepo.findById(paymentId);
        Payment existingPayment = optionalPayment.orElseThrow(() ->
                new PaymentNotFoundException("Payment not found with id: " + paymentId));

        // Update fields with values from PaymentDto
        existingPayment.setStatus(paymentDto.getStatus());
        existingPayment.setAmountPaid(paymentDto.getAmountPaid());
        // Add more fields as needed

        // Save the updated entity back to the repository
        Payment updatedPayment = paymentRepo.save(existingPayment);
        return PaymentMapper.mapToPaymentDto(updatedPayment);
    }

    @Override
    public void deletePayment(Long paymentId) {
        paymentRepo.deleteById(paymentId);
    }
    // Other methods for updating, deleting, etc. can be added as needed
}
