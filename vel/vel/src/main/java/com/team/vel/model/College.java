package com.team.vel.model;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Entity
@Table(name = "Institute")
@AllArgsConstructor
@Getter
@Setter

public class College {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "instituteId")
    private Long instituteId;

    @Column(name = "instituteName", nullable = false)
    private String instituteName;

    @Column(name = "instituteDescription")
    private String instituteDescription;

    @Column(name = "instituteAddress")
    private String instituteAddress;

    @Column(name = "mobile")
    private String mobile;

    @Column(name = "email")
    private String email;

    @Column(name = "noOfCoursesAvailable")
    private Long noOfCoursesAvailable;
    @Column(name = "imageUrl")
    private String imageUrl;

    @Column(name = "profileUrl")
    private String profileUrl;

    @Column(name = "founder")
    private String founder;

    @Column(name = "starnumber") // New field
    private int starnumber;

    @Column(name = "avgfee") // New field
    private double avgfee;

// @ManyToMany
//     @JoinTable(
//         name = "institution_course",
//         joinColumns = @JoinColumn(name = "institute_id"),
//         inverseJoinColumns = @JoinColumn(name = "course_id"))
//     private Set<Course> courses = new HashSet<>();
    @JsonManagedReference
    @OneToMany(mappedBy = "college", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Course> courses;

}
