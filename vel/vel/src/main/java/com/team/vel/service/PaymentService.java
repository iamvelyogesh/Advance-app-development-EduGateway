package com.team.vel.service;

import java.util.List;

import com.team.vel.dto.PaymentDto;

public interface PaymentService {

    PaymentDto createPayment(PaymentDto paymentDto);

    PaymentDto getPaymentById(Long paymentId);

    List<PaymentDto> getAllPayments();

    PaymentDto updatePayment(Long paymentId, PaymentDto paymentDto);

    void deletePayment(Long paymentId);

    // Other methods for updating, deleting, etc. can be added as needed
}
