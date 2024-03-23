package com.team.vel.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class EnrollmentDto {
    private Long id;
    private String applicationId;
    private String studentName;
    private String studentMail;
    private String studentPhoneNumber;
    private String twelfthMarks;
    private String collegeName;
    private String location;
    private String courseName;
    private String courseCode;
    private String aadharNumber;
    private String stage = "applied";
    private String payment = "not paid";
}
