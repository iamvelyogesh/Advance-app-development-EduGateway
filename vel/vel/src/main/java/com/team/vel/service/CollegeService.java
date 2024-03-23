// package com.team.vel.service;

// import java.util.List;

// import com.team.vel.dto.CollegeDto;
// import com.team.vel.dto.CourseDto;
// import com.team.vel.model.College;
// import com.team.vel.model.Course;

// public interface CollegeService {

//     CollegeDto createInstitute(CollegeDto collegeDTO);

//     CollegeDto getInstituteById(Long instituteId);

//     // List<CollegeDto> getAllInstitutes();
//     List<College> getAllInstitutes();

//     CollegeDto updateInstitute(Long instituteId, CollegeDto collegeDto);

//     void deleteInstitute(Long instituteId);
//     Course updateCourse(Long instituteId, Long courseId, CourseDto courseDto);

//     void deleteCourse(Long instituteId, Long courseId);

//     long getNumberOfColleges();

//     long getNumberOfCourses();


//     // Other methods for updating, deleting, etc. can be added as needed
// }
package com.team.vel.service;

import com.team.vel.dto.CollegeDto;
import com.team.vel.dto.CourseDto;
import com.team.vel.model.College;
import com.team.vel.model.Course;
import java.util.List;

public interface CollegeService {

    CollegeDto createInstitute(CollegeDto collegeDto);

    CollegeDto getInstituteById(Long instituteId);

    List<College> getAllInstitutes();

    CollegeDto updateInstitute(Long instituteId, CollegeDto collegeDto);

    void deleteInstitute(Long instituteId);

    Course updateCourse(Long instituteId, Long courseId, CourseDto courseDto);

    void deleteCourse(Long instituteId, Long courseId);

    long getNumberOfColleges();

    long getNumberOfCourses();
}