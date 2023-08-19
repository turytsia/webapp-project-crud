import { Component, OnInit } from '@angular/core';
import { ProjectInterface, ProjectsService } from './projects.service';

import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  faPen = faPen
  faTimes = faTimes

  projects: ProjectInterface[] = []
  search: string = ""


  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe(projects => {
      this.projects = projects
    })
  }

  getFilteredProjects(): ProjectInterface[] {
    return this.projects.filter(({ name }) => name.toLowerCase().includes(this.search.toLowerCase()))
  }

  onUpdate() {
    console.log("Update")
  }

  onCreate(project: ProjectInterface) {
    this.projectsService.createProject(project).subscribe(project => {
      this.projects.push(project)
    })
  }

  onDelete(id: number) {
    this.projectsService.deleteProject(id).subscribe(() => {
      this.projects = this.projects.filter(p => p.id !== id)
    })
  }
}
