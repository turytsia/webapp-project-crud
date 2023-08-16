package com.example.proj.project.errors;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Project not found")
public class ProjectNotFound extends RuntimeException {
    public ProjectNotFound(String message) {
        super(message);
    }
}
