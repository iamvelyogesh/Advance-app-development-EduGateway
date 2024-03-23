package com.team.vel.service.impl;

public class RoleNotAuthorizedException extends RuntimeException {

    public RoleNotAuthorizedException(String message) {
        super(message);
    }
}
