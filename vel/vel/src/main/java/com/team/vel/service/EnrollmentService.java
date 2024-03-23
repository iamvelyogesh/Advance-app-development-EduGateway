package com.team.vel.service;

import com.team.vel.dto.CourseDto;
import com.team.vel.dto.EnrollmentDto;
import com.team.vel.dto.UserDto;

import java.util.List;

public interface EnrollmentService {
    EnrollmentDto createEnrollment(EnrollmentDto enrollmentDto);
    EnrollmentDto getEnrollmentById(Long id);
    List<EnrollmentDto> getAllEnrollments();
    EnrollmentDto updateEnrollment(Long id, EnrollmentDto enrollmentDto);
    void deleteEnrollment(Long id);
    // EnrollmentDto createEnrollment(Long instituteId, EnrollmentDto enrollmentDto);
    EnrollmentDto createEnrollment(Long instituteId, EnrollmentDto enrollmentDto);
    EnrollmentDto updateEnrollmentStage(Long id, String stage);
    List<EnrollmentDto> getEnrollmentsWithPaymentSuccess();
    
    EnrollmentDto changePaymentStatusToSuccess(Long id);
  



}
