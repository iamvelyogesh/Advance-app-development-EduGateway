package com.team.vel.mapper;

import com.team.vel.dto.CollegeDTO2;
import com.team.vel.dto.CollegeDto;
import com.team.vel.model.College;

public class CollegeMapper {

    public static CollegeDto mapToCollegeDto(College college) {
        CollegeDto collegeDto = new CollegeDto();
        collegeDto.setInstituteId(college.getInstituteId());
        collegeDto.setInstituteName(college.getInstituteName());
        collegeDto.setInstituteDescription(college.getInstituteDescription());
        collegeDto.setInstituteAddress(college.getInstituteAddress());
        collegeDto.setMobile(college.getMobile());
        collegeDto.setEmail(college.getEmail());
        collegeDto.setNoOfCoursesAvailable(college.getNoOfCoursesAvailable());
        collegeDto.setImageUrl(college.getImageUrl()); // Mapping imageUrl
        collegeDto.setProfileUrl(college.getProfileUrl());
        collegeDto.setFounder(college.getFounder());
        collegeDto.setStarnumber(college.getStarnumber()); 
        collegeDto.setAvgfee(college.getAvgfee());
        return collegeDto;
    }

    public static College mapToCollege(CollegeDto collegeDto) {
        College college = new College();
        college.setInstituteId(collegeDto.getInstituteId());
        college.setInstituteName(collegeDto.getInstituteName());
        college.setInstituteDescription(collegeDto.getInstituteDescription());
        college.setInstituteAddress(collegeDto.getInstituteAddress());
        college.setMobile(collegeDto.getMobile());
        college.setEmail(collegeDto.getEmail());
        college.setNoOfCoursesAvailable(collegeDto.getNoOfCoursesAvailable());
        college.setImageUrl(collegeDto.getImageUrl()); // Mapping imageUrl
        college.setProfileUrl(collegeDto.getProfileUrl()); 
        college.setFounder(collegeDto.getFounder());
        college.setStarnumber(collegeDto.getStarnumber());
        college.setAvgfee(collegeDto.getAvgfee());
        return college;
    }
        public static CollegeDTO2 mapToCollegeDTO2(College college) {
        CollegeDTO2 collegeDTO2 = new CollegeDTO2(); // Assuming CollegeDTO2 extends CollegeDto
        collegeDTO2.setInstituteId(college.getInstituteId());
        collegeDTO2.setInstituteName(college.getInstituteName());
        collegeDTO2.setInstituteDescription(college.getInstituteDescription());
        collegeDTO2.setInstituteAddress(college.getInstituteAddress());
        collegeDTO2.setMobile(college.getMobile());
        collegeDTO2.setEmail(college.getEmail());
        collegeDTO2.setNoOfCoursesAvailable(college.getNoOfCoursesAvailable());
        // Additional mappings specific to CollegeDTO2
        return collegeDTO2;
    }
    
}
