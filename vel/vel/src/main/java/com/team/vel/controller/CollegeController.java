// package com.team.vel.controller;

// import lombok.AllArgsConstructor;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.team.vel.dto.CollegeDto;
// import com.team.vel.dto.CourseDto;
// import com.team.vel.model.College;
// import com.team.vel.model.Course;
// import com.team.vel.service.CollegeService;

// import java.util.List;
// @AllArgsConstructor
// @RestController
// @CrossOrigin("*")
// @RequestMapping("/api/institutes")
// public class CollegeController {

//     private  CollegeService collegeService;

//     @PostMapping
//     public ResponseEntity<CollegeDto> createInstitute(@RequestBody CollegeDto collegeDto) {
//         CollegeDto savedCollege = collegeService.createInstitute(collegeDto);
//         return new ResponseEntity<>(savedCollege, HttpStatus.CREATED);
//     }

//     @GetMapping("{id}")
//     public ResponseEntity<CollegeDto> getInstituteById(@PathVariable("id") Long instituteId) {
        
//             CollegeDto instituteDTO = collegeService.getInstituteById(instituteId);
//             return ResponseEntity.ok(instituteDTO);
        
//     }

//     // @GetMapping
//     // public ResponseEntity<List<CollegeDto>> getAllInstitutes() {
//     //     List<CollegeDto> institutes = collegeService.getAllInstitutes();
//     //     return ResponseEntity.ok(institutes);
//     // }
//     @GetMapping
// public ResponseEntity<List<College>> getAllInstitutes() {
//     List<College> institutes = collegeService.getAllInstitutes(); // Update the return type of getAllInstitutes method in CollegeService
//     return ResponseEntity.ok(institutes);
//     // return new ResponseEntity<>(institutes,HttpStatus.OK);
// }

//      @PutMapping("{id}")
//     public ResponseEntity<CollegeDto> updateInstitute(@PathVariable("id") Long instituteId, @RequestBody CollegeDto collegeDto) {
//         CollegeDto updatedCollege = collegeService.updateInstitute(instituteId, collegeDto);
//         return ResponseEntity.ok(updatedCollege);
//     }

//     @DeleteMapping("{id}")
//     public ResponseEntity<Void> deleteInstitute(@PathVariable("id") Long instituteId) {
//         collegeService.deleteInstitute(instituteId);
//         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//     }
//     @PutMapping("/{instituteId}/courses/{courseId}")
//     public ResponseEntity<Course> updateCourse(@PathVariable("instituteId") Long instituteId,
//                                                @PathVariable("courseId") Long courseId,
//                                                @RequestBody CourseDto courseDto) {
//         Course updatedCourse = collegeService.updateCourse(instituteId, courseId, courseDto);
//         return ResponseEntity.ok(updatedCourse);
//     }

//     // Delete course by institute ID and course ID
//     @DeleteMapping("/{instituteId}/courses/{courseId}")
//     public ResponseEntity<Void> deleteCourse(@PathVariable("instituteId") Long instituteId,
//                                              @PathVariable("courseId") Long courseId) {
//         collegeService.deleteCourse(instituteId, courseId);
//         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//     }

//         @GetMapping("/count/colleges")
//     public ResponseEntity<Long> getNumberOfColleges() {
//         long numberOfColleges = collegeService.getNumberOfColleges();
//         return ResponseEntity.ok(numberOfColleges);
//     }

//     // Get the number of courses
//     @GetMapping("/count/courses")
//     public ResponseEntity<Long> getNumberOfCourses() {
//         long numberOfCourses = collegeService.getNumberOfCourses();
//         return ResponseEntity.ok(numberOfCourses);
//     }

// }
package com.team.vel.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.team.vel.dto.CollegeDto;
import com.team.vel.dto.CourseDto;
import com.team.vel.model.College;
import com.team.vel.model.Course;
import com.team.vel.service.CollegeService;
import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin("*")
@RequestMapping("/api/institutes")
public class CollegeController {

    private final CollegeService collegeService;

    @PostMapping
    public ResponseEntity<CollegeDto> createInstitute(@RequestBody CollegeDto collegeDto) {
        CollegeDto savedCollege = collegeService.createInstitute(collegeDto);
        return new ResponseEntity<>(savedCollege, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<CollegeDto> getInstituteById(@PathVariable("id") Long instituteId) {
        CollegeDto instituteDTO = collegeService.getInstituteById(instituteId);
        return ResponseEntity.ok(instituteDTO);
    }

    @GetMapping
    public ResponseEntity<List<College>> getAllInstitutes() {
        List<College> institutes = collegeService.getAllInstitutes();
        return ResponseEntity.ok(institutes);
    }

    @PutMapping("{id}")
    public ResponseEntity<CollegeDto> updateInstitute(@PathVariable("id") Long instituteId, @RequestBody CollegeDto collegeDto) {
        CollegeDto updatedCollege = collegeService.updateInstitute(instituteId, collegeDto);
        return ResponseEntity.ok(updatedCollege);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteInstitute(@PathVariable("id") Long instituteId) {
        collegeService.deleteInstitute(instituteId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{instituteId}/courses/{courseId}")
    public ResponseEntity<Course> updateCourse(@PathVariable("instituteId") Long instituteId,
                                                @PathVariable("courseId") Long courseId,
                                                @RequestBody CourseDto courseDto) {
        Course updatedCourse = collegeService.updateCourse(instituteId, courseId, courseDto);
        return ResponseEntity.ok(updatedCourse);
    }

    @DeleteMapping("/{instituteId}/courses/{courseId}")
    public ResponseEntity<Void> deleteCourse(@PathVariable("instituteId") Long instituteId,
                                              @PathVariable("courseId") Long courseId) {
        collegeService.deleteCourse(instituteId, courseId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/count/colleges")
    public ResponseEntity<Long> getNumberOfColleges() {
        long numberOfColleges = collegeService.getNumberOfColleges();
        return ResponseEntity.ok(numberOfColleges);
    }

    @GetMapping("/count/courses")
    public ResponseEntity<Long> getNumberOfCourses() {
        long numberOfCourses = collegeService.getNumberOfCourses();
        return ResponseEntity.ok(numberOfCourses);
    }
}