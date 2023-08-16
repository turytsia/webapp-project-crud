package com.example.proj.project;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.proj.project.errors.ProjectNotFound;

@Service
public class ProjectService {
    private final ProjectRepository projectRepository;

    @Autowired
    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public Project getProject(long id) {
        try {
            return projectRepository.findById(id).get();
        } catch (NoSuchElementException e) {
            throw new ProjectNotFound(e.getMessage());
        }

    }

    public List<Project> getProjects() {
        return projectRepository.findAll();
    }

    public Project saveProject(Project project) {
        return projectRepository.save(project);
    }

    public Project updateProject(Project project, long id) {
        try {
            Project updateProject = projectRepository.findById(id).get();

            updateProject.setName(project.getName());
            updateProject.setDescription(project.getDescription());
            return projectRepository.save(project);
        } catch (NoSuchElementException e) {
            return projectRepository.save(project);
        }

    }

    public void deleteProject(long id) {
        projectRepository.deleteById(id);
    }
}
