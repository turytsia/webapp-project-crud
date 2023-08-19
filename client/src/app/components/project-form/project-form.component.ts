import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProjectInterface, ProjectsService } from '../projects/projects.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  public registerForm: any

  @Output() createProject: EventEmitter<ProjectInterface> = new EventEmitter()

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: '',
      description: ''
    })
  }

  onSubmit(): void {
    this.createProject.emit(this.registerForm.value)
  }
}
