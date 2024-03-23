package com.team.vel.controller;

import com.team.vel.dto.CourseDto;
import com.team.vel.dto.EnrollmentDto;
import com.team.vel.service.EnrollmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/enrollments")
public class EnrollmentController {

    @Autowired
    private EnrollmentService enrollmentService;

    @PostMapping
    public ResponseEntity<EnrollmentDto> createEnrollment(@RequestBody EnrollmentDto enrollmentDto) {
        EnrollmentDto createdEnrollment = enrollmentService.createEnrollment(enrollmentDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdEnrollment);
    }

    // @GetMapping("/{id}")
    // public ResponseEntity<EnrollmentDto> getEnrollmentById(@PathVariable Long id) {
    //     EnrollmentDto enrollmentDto = enrollmentService.getEnrollmentById(id);
    //     return ResponseEntity.ok(enrollmentDto);
    // }

    @GetMapping
    public ResponseEntity<List<EnrollmentDto>> getAllEnrollments() {
        List<EnrollmentDto> enrollmentDtos = enrollmentService.getAllEnrollments();
        return ResponseEntity.ok(enrollmentDtos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EnrollmentDto> updateEnrollment(@PathVariable Long id, @RequestBody EnrollmentDto enrollmentDto) {
        EnrollmentDto updatedEnrollment = enrollmentService.updateEnrollment(id, enrollmentDto);
        return ResponseEntity.ok(updatedEnrollment);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEnrollment(@PathVariable Long id) {
        enrollmentService.deleteEnrollment(id);
        return ResponseEntity.noContent().build();
    }
    @PostMapping("/{instituteId}/courses")
    public ResponseEntity<EnrollmentDto> createCourse(@PathVariable("instituteId") Long instituteId, @RequestBody EnrollmentDto enrollmentDto) {
        EnrollmentDto savedEnrollment = enrollmentService.createEnrollment(instituteId, enrollmentDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedEnrollment);
    }
    @PostMapping("/{userId}/{instituteId}/courses")
public ResponseEntity<EnrollmentDto> createCourse(@PathVariable("userId") Long userId, @PathVariable("instituteId") Long instituteId, @RequestBody EnrollmentDto enrollmentDto) {
    // Set the user ID in the enrollment DTO
    enrollmentDto.setApplicationId(userId.toString());
    
    // Call the service method to create the course
    EnrollmentDto savedEnrollment = enrollmentService.createEnrollment(instituteId, enrollmentDto);
    
    // Return the created enrollment
    return ResponseEntity.status(HttpStatus.CREATED).body(savedEnrollment);
}
@PutMapping("/{id}/stage")
public ResponseEntity<EnrollmentDto> updateEnrollmentStage(@PathVariable Long id, @RequestParam String stage) {
    EnrollmentDto updatedEnrollment = enrollmentService.updateEnrollmentStage(id, stage);
    if (updatedEnrollment != null) {
        return ResponseEntity.ok(updatedEnrollment);
    } else {
        return ResponseEntity.notFound().build();
    }
}
@GetMapping("/payment/success")
public ResponseEntity<List<EnrollmentDto>> getEnrollmentsWithPaymentSuccess() {
    List<EnrollmentDto> enrollments = enrollmentService.getEnrollmentsWithPaymentSuccess();
    return ResponseEntity.ok(enrollments);
}

// POST mapping to change payment status from not paid to success
@PostMapping("/{id}/payment/success")
public ResponseEntity<EnrollmentDto> changePaymentStatusToSuccess(@PathVariable Long id) {
    EnrollmentDto updatedEnrollment = enrollmentService.changePaymentStatusToSuccess(id);
    if (updatedEnrollment != null) {
        return ResponseEntity.ok(updatedEnrollment);
    } else {
        return ResponseEntity.notFound().build();
    }
}


}
