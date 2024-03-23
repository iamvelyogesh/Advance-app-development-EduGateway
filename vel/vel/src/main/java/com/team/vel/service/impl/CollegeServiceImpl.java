// package com.team.vel.service.impl;

// import lombok.AllArgsConstructor;
// import org.springframework.stereotype.Service;

// import com.team.vel.dto.CollegeDTO2;
// import com.team.vel.dto.CollegeDto;
// import com.team.vel.dto.CourseDto;
// import com.team.vel.exception.CollegeNotFoundException;
// import com.team.vel.exception.CourseNotFoundException;
// import com.team.vel.mapper.CollegeMapper;
// import com.team.vel.mapper.CourseMapper;
// import com.team.vel.model.College;
// import com.team.vel.model.Course;
// import com.team.vel.repository.CollegeRepo;
// import com.team.vel.repository.CourseRepo;
// import com.team.vel.service.CollegeService;

// import java.util.List;
// import java.util.Optional;
// import java.util.stream.Collectors;

// @Service
// @AllArgsConstructor
// public class CollegeServiceImpl implements CollegeService {

//     private final CollegeRepo collegeRepo;
//     private final CourseRepo courseRepository; 
    

//     @Override
//     public CollegeDto createInstitute(CollegeDto collegeDto) {
//         College college = CollegeMapper.mapToCollege(collegeDto);
//         College savedCollege = collegeRepo.save(college);
//         return CollegeMapper.mapToCollegeDto(savedCollege);
//     }

//     public CollegeDto getInstituteById(Long instituteId) {
//         College college = collegeRepo.findById(instituteId)
//                 .orElseThrow(() -> new CollegeNotFoundException("College not found with id: " + instituteId));
//         return CollegeMapper.mapToCollegeDto(college);
//     }

//     // @Override
//     // public List<CollegeDto> getAllInstitutes() {
//     //     List<College> institutes = collegeRepo.findAll();
//     //     return institutes.stream()
//     //             .map(CollegeMapper::mapToCollegeDto)
//     //             .collect(Collectors.toList());
//     // }
//     @Override
//     public List<College> getAllInstitutes() {
//         return collegeRepo.findAll();
//     }

//     @Override
//     public CollegeDto updateInstitute(Long instituteId, CollegeDto collegeDto) {
//         Optional<College> optionalCollege = collegeRepo.findById(instituteId);
//         College existingCollege = optionalCollege.orElseThrow(() ->
//                 new CollegeNotFoundException("College not found with id: " + instituteId));

//         // Update fields with values from CollegeDto
//         existingCollege.setInstituteName(collegeDto.getInstituteName());
//         existingCollege.setInstituteDescription(collegeDto.getInstituteDescription());
//         existingCollege.setInstituteAddress(collegeDto.getInstituteAddress());
//         existingCollege.setMobile(collegeDto.getMobile());
//         existingCollege.setEmail(collegeDto.getEmail());
//         existingCollege.setNoOfCoursesAvailable(collegeDto.getNoOfCoursesAvailable());
//         // Update other fields as needed

//         // Save the updated entity back to the repository
//         College updatedCollege = collegeRepo.save(existingCollege);
//         return CollegeMapper.mapToCollegeDto(updatedCollege);
//     }

//     @Override
//     public void deleteInstitute(Long instituteId) {
//         collegeRepo.deleteById(instituteId);
//     }
    
//     @Override
//     public Course updateCourse(Long instituteId, Long courseId, CourseDto courseDto) {
//         // Validate if the institute exists
//         College college = collegeRepo.findById(instituteId)
//                 .orElseThrow(() -> new CollegeNotFoundException("College not found with id: " + instituteId));

//         // Find the course in the college's courses list
//         Optional<Course> optionalCourse = college.getCourses().stream()
//                 .filter(course -> course.getCourseId().equals(courseId))
//                 .findFirst();

//         Course courseToUpdate = optionalCourse.orElseThrow(() -> new CourseNotFoundException("Course not found with id: " + courseId));

//         // Update course details
//         courseToUpdate.setCourseName(courseDto.getCourseName());
//         courseToUpdate.setCourseDescription(courseDto.getCourseDescription());
//         // Update other fields as needed

//         // Save and return the updated course
//         return courseRepository.save(courseToUpdate);
//     }

//     // @Override
//     // public void deleteCourse(Long instituteId, Long courseId) {
//     //     // Validate if the institute exists
//     //     College college = collegeRepo.findById(instituteId)
//     //             .orElseThrow(() -> new CollegeNotFoundException("College not found with id: " + instituteId));

//     //     // Find the course in the college's courses list
//     //     Optional<Course> optionalCourse = college.getCourses().stream()
//     //             .filter(course -> course.getCourseId().equals(courseId))
//     //             .findFirst();

//     //     Course courseToDelete = optionalCourse.orElseThrow(() -> new CourseNotFoundException("Course not found with id: " + courseId));

//     //     // Remove the course from the college's courses list
//     //     college.getCourses().remove(courseToDelete);
//     //     collegeRepo.save(college); // Save the updated college
//     // }
    
//     @Override
//     public void deleteCourse(Long instituteId, Long courseId) {
//         // Fetch the college by ID
//         College college = collegeRepo.findById(instituteId)
//                 .orElseThrow(() -> new CollegeNotFoundException("College not found with id: " + instituteId));

//         // Find the course in the college's courses list
//         Course courseToDelete = college.getCourses().stream()
//                 .filter(course -> course.getCourseId().equals(courseId))
//                 .findFirst()
//                 .orElseThrow(() -> new CourseNotFoundException("Course not found with id: " + courseId));

//         // Remove the course from the college's courses list
//         college.getCourses().remove(courseToDelete);

//         // Save the updated college to persist the changes
//         collegeRepo.save(college);

//         // Delete the course from the database
//         courseRepository.delete(courseToDelete);
//     }

//     @Override
//     public long getNumberOfColleges() {
//         return collegeRepo.count(); // Assuming collegeRepo is your College repository
//     }

//     @Override
//     public long getNumberOfCourses() {
//         return courseRepository.count(); // Assuming courseRepository is your Course repository
//     }
//     // Other methods for updating, deleting, etc. can be added as needed
// }

package com.team.vel.service.impl;

import com.team.vel.dto.CollegeDto;
import com.team.vel.dto.CourseDto;
import com.team.vel.exception.CollegeNotFoundException;
import com.team.vel.exception.CourseNotFoundException;
import com.team.vel.mapper.CollegeMapper;
import com.team.vel.mapper.CourseMapper;
import com.team.vel.model.College;
import com.team.vel.model.Course;
import com.team.vel.repository.CollegeRepo;
import com.team.vel.repository.CourseRepo;
import com.team.vel.service.CollegeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CollegeServiceImpl implements CollegeService {

    private final CollegeRepo collegeRepo;
    private final CourseRepo courseRepository;

    @Override
    public CollegeDto createInstitute(CollegeDto collegeDto) {
        College college = CollegeMapper.mapToCollege(collegeDto);
        College savedCollege = collegeRepo.save(college);
        return CollegeMapper.mapToCollegeDto(savedCollege);
    }

    public CollegeDto getInstituteById(Long instituteId) {
        College college = collegeRepo.findById(instituteId)
                .orElseThrow(() -> new CollegeNotFoundException("College not found with id: " + instituteId));
        return CollegeMapper.mapToCollegeDto(college);
    }

    @Override
    public List<College> getAllInstitutes() {
        return collegeRepo.findAll();
    }

    @Override
    public CollegeDto updateInstitute(Long instituteId, CollegeDto collegeDto) {
        Optional<College> optionalCollege = collegeRepo.findById(instituteId);
        College existingCollege = optionalCollege.orElseThrow(() ->
                new CollegeNotFoundException("College not found with id: " + instituteId));
        existingCollege.setInstituteName(collegeDto.getInstituteName());
        existingCollege.setInstituteDescription(collegeDto.getInstituteDescription());
        existingCollege.setInstituteAddress(collegeDto.getInstituteAddress());
        existingCollege.setMobile(collegeDto.getMobile());
        existingCollege.setEmail(collegeDto.getEmail());
        existingCollege.setNoOfCoursesAvailable(collegeDto.getNoOfCoursesAvailable());
        existingCollege.setImageUrl(collegeDto.getImageUrl());
        existingCollege.setProfileUrl(collegeDto.getProfileUrl());
        existingCollege.setFounder(collegeDto.getFounder()); 
        College updatedCollege = collegeRepo.save(existingCollege);
        return CollegeMapper.mapToCollegeDto(updatedCollege);
    }

    @Override
    public void deleteInstitute(Long instituteId) {
        collegeRepo.deleteById(instituteId);
    }

    @Override
    public Course updateCourse(Long instituteId, Long courseId, CourseDto courseDto) {
        College college = collegeRepo.findById(instituteId)
                .orElseThrow(() -> new CollegeNotFoundException("College not found with id: " + instituteId));
        Optional<Course> optionalCourse = college.getCourses().stream()
                .filter(course -> course.getCourseId().equals(courseId))
                .findFirst();
        Course courseToUpdate = optionalCourse.orElseThrow(() -> new CourseNotFoundException("Course not found with id: " + courseId));
        courseToUpdate.setCourseName(courseDto.getCourseName());
        courseToUpdate.setCourseDescription(courseDto.getCourseDescription());
        return courseRepository.save(courseToUpdate);
    }

    @Override
    public void deleteCourse(Long instituteId, Long courseId) {
        College college = collegeRepo.findById(instituteId)
                .orElseThrow(() -> new CollegeNotFoundException("College not found with id: " + instituteId));
        Course courseToDelete = college.getCourses().stream()
                .filter(course -> course.getCourseId().equals(courseId))
                .findFirst()
                .orElseThrow(() -> new CourseNotFoundException("Course not found with id: " + courseId));
        college.getCourses().remove(courseToDelete);
        collegeRepo.save(college);
        courseRepository.delete(courseToDelete);
    }

    @Override
    public long getNumberOfColleges() {
        return collegeRepo.count();
    }

    @Override
    public long getNumberOfCourses() {
        return courseRepository.count();
    }
}