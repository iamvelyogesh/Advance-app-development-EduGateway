package com.team.vel.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class CollegeNotFoundException extends RuntimeException {

    public CollegeNotFoundException(String message) {
        super(message);
    }
}
