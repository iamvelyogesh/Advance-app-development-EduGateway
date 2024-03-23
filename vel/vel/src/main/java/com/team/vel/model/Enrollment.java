package com.team.vel.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "Enrollment")
public class Enrollment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "applicationId")
    private String applicationId;

    @Column(name = "studentName")
    private String studentName;

    @Column(name = "studentMail")
    private String studentMail;

    @Column(name = "collegeName")
    private String collegeName;

   @Column(name = "location")
   private String location;


    @Column(name = "studentPhoneNumber")
    private String studentPhoneNumber;

    @Column(name = "twelfthMarks")
    private String twelfthMarks;

    @Column(name = "aadharNumber")
    private String aadharNumber;

    @Column(name = "stage")
    private String stage;
    @Column(name = "course_name")
    private String courseName;
    
    @Column(name = "course_code")
    private String courseCode;

    @Column(name = "payment")
    private String payment = "not paid";
    

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "enrollId", referencedColumnName = "userId")
    private User user;

}
