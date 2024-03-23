package com.team.vel.service.impl;

import com.team.vel.dto.CourseDto;
import com.team.vel.dto.EnrollmentDto;
import com.team.vel.exception.CollegeNotFoundException;
import com.team.vel.mapper.CourseMapper;
import com.team.vel.mapper.EnrollmentMapper;
import com.team.vel.model.College;
import com.team.vel.model.Course;
import com.team.vel.model.Enrollment;
import com.team.vel.model.User;
import com.team.vel.repository.EnrollmentRepository;
import com.team.vel.repository.UserRepo;
import com.team.vel.service.EnrollmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EnrollmentServiceImpl implements EnrollmentService {

    
    private EnrollmentRepository enrollmentRepository;
    private UserRepo userRepository;
    @Autowired
    public EnrollmentServiceImpl(UserRepo userRepository, EnrollmentRepository enrollmentRepository) {
        this.userRepository = userRepository;
        this.enrollmentRepository = enrollmentRepository;
    }

    @Override
    public EnrollmentDto createEnrollment(EnrollmentDto enrollmentDto) {
        Enrollment enrollment = new Enrollment();
        enrollment.setApplicationId(enrollmentDto.getApplicationId());
        enrollment.setStudentName(enrollmentDto.getStudentName());
        enrollment.setStudentMail(enrollmentDto.getStudentMail());
        enrollment.setStudentPhoneNumber(enrollmentDto.getStudentPhoneNumber());
        enrollment.setTwelfthMarks(enrollmentDto.getTwelfthMarks());
        enrollment.setAadharNumber(enrollmentDto.getAadharNumber());
        enrollment.setStage(enrollmentDto.getStage());
        Enrollment savedEnrollment = enrollmentRepository.save(enrollment);
        return EnrollmentMapper.mapToEnrollmentDto(savedEnrollment);
    }

    @Override
    public EnrollmentDto getEnrollmentById(Long id) {
        Optional<Enrollment> optionalEnrollment = enrollmentRepository.findById(id);
        return optionalEnrollment.map(EnrollmentMapper::mapToEnrollmentDto).orElse(null);
    }

    @Override
    public List<EnrollmentDto> getAllEnrollments() {
        List<Enrollment> enrollments = enrollmentRepository.findAll();
        return enrollments.stream().map(EnrollmentMapper::mapToEnrollmentDto).collect(Collectors.toList());
    }

    @Override
    public EnrollmentDto updateEnrollment(Long id, EnrollmentDto enrollmentDto) {
        Optional<Enrollment> optionalEnrollment = enrollmentRepository.findById(id);
        if (optionalEnrollment.isPresent()) {
            Enrollment enrollment = optionalEnrollment.get();
            enrollment.setApplicationId(enrollmentDto.getApplicationId());
            enrollment.setStudentName(enrollmentDto.getStudentName());
            enrollment.setStudentMail(enrollmentDto.getStudentMail());
            enrollment.setStudentPhoneNumber(enrollmentDto.getStudentPhoneNumber());
            enrollment.setTwelfthMarks(enrollmentDto.getTwelfthMarks());
            enrollment.setAadharNumber(enrollmentDto.getAadharNumber());
            enrollment.setStage(enrollmentDto.getStage());
            Enrollment updatedEnrollment = enrollmentRepository.save(enrollment);
            return EnrollmentMapper.mapToEnrollmentDto(updatedEnrollment);
        }
        return null;
    }

    @Override
    public void deleteEnrollment(Long id) {
        enrollmentRepository.deleteById(id);
    }

    
    @Override
    public EnrollmentDto createEnrollment(Long instituteId, EnrollmentDto enrollmentDto) {
    // Find the college by its ID
    Optional<User> optionalCollege = userRepository.findById(instituteId);
    User college = optionalCollege.orElseThrow(() ->
            new CollegeNotFoundException("College not found with id: " + instituteId));

    // Map EnrollmentDto to Enrollment entity
    Enrollment enrollment = EnrollmentMapper.mapToEnrollment(enrollmentDto);
    enrollment.setCollegeName(enrollmentDto.getCollegeName());
    enrollment.setLocation(enrollmentDto.getLocation());
    enrollment.setCourseName(enrollmentDto.getCourseName());
    enrollment.setCourseCode(enrollmentDto.getCourseCode());


    // Associate the enrollment with the college
    enrollment.setUser(college);

    // Save the enrollment
    Enrollment savedEnrollment = enrollmentRepository.save(enrollment);

    // Update the list of enrollments for the college and save the college
    college.getEnrollments().add(savedEnrollment);
    userRepository.save(college);

    // Map saved enrollment back to EnrollmentDto and return
    return EnrollmentMapper.mapToEnrollmentDto(savedEnrollment);
}
@Override
public EnrollmentDto updateEnrollmentStage(Long id, String stage) {
    Optional<Enrollment> optionalEnrollment = enrollmentRepository.findById(id);
    if (optionalEnrollment.isPresent()) {
        Enrollment enrollment = optionalEnrollment.get();
        enrollment.setStage(stage);
        Enrollment updatedEnrollment = enrollmentRepository.save(enrollment);
        return EnrollmentMapper.mapToEnrollmentDto(updatedEnrollment);
    }
    return null;
}

@Override
public List<EnrollmentDto> getEnrollmentsWithPaymentSuccess() {
    List<Enrollment> enrollments = enrollmentRepository.findByPayment("success");
    return enrollments.stream()
            .map(EnrollmentMapper::mapToEnrollmentDto)
            .collect(Collectors.toList());
}

@Override
public EnrollmentDto changePaymentStatusToSuccess(Long id) {
    Enrollment enrollment = enrollmentRepository.findById(id).orElse(null);
    if (enrollment != null) {
        enrollment.setPayment("success");
        Enrollment savedEnrollment = enrollmentRepository.save(enrollment);
        return EnrollmentMapper.mapToEnrollmentDto(savedEnrollment);
    }
    return null;
}



}
