package com.team.vel.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PaymentDto {

    private Long paymentId;
    private String status;
    private Double amountPaid;
    private Date paymentDate;
    private String modeOfPayment;
}
