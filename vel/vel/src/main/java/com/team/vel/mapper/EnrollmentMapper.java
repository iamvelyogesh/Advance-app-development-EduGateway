package com.team.vel.mapper;

import com.team.vel.dto.EnrollmentDto;
import com.team.vel.model.Enrollment;

public class EnrollmentMapper {
    public static EnrollmentDto mapToEnrollmentDto(Enrollment enrollment) {
        EnrollmentDto dto = new EnrollmentDto();
        dto.setId(enrollment.getId());
        dto.setApplicationId(enrollment.getApplicationId());
        dto.setStudentName(enrollment.getStudentName());
        dto.setStudentMail(enrollment.getStudentMail());
        dto.setCollegeName(enrollment.getCollegeName());
        dto.setLocation(enrollment.getLocation());
        dto.setStudentPhoneNumber(enrollment.getStudentPhoneNumber());
        dto.setTwelfthMarks(enrollment.getTwelfthMarks());
        dto.setAadharNumber(enrollment.getAadharNumber());
        dto.setStage(enrollment.getStage());
        dto.setCourseName(enrollment.getCourseName());
        dto.setCourseCode(enrollment.getCourseCode());
        dto.setPayment(enrollment.getPayment());

        return dto;
    }

    public static Enrollment mapToEnrollment(EnrollmentDto dto) {
        Enrollment enrollment = new Enrollment();
        enrollment.setId(dto.getId());
        enrollment.setApplicationId(dto.getApplicationId());
        enrollment.setStudentName(dto.getStudentName());
        enrollment.setStudentMail(dto.getStudentMail());
        enrollment.setStudentPhoneNumber(dto.getStudentPhoneNumber());
        enrollment.setTwelfthMarks(dto.getTwelfthMarks());
        enrollment.setAadharNumber(dto.getAadharNumber());
        enrollment.setStage(dto.getStage());
        return enrollment;
    }
}
