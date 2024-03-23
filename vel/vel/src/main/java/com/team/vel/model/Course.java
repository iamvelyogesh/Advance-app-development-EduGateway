package com.team.vel.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "Course")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "courseId")
    private Long courseId;

    @Column(name = "courseName", nullable = false)
    private String courseName;

    @Column(name = "courseDescription")
    private String courseDescription;

    @Column(name = "courseDuration")
    private String courseDuration;

    @Column(name = "fees")
    private Double fees;

    @Column(name = "noOfSeats")
    private int noOfSeats;

//      // Define ManyToOne association with College
//      @ManyToOne(fetch = FetchType.LAZY)
//      @JoinColumn(name = "college_id") // Assuming this is the column name in Course table
//      private College college;
@JsonBackReference
@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "collegeId", referencedColumnName = "instituteId")
private College college;
}
