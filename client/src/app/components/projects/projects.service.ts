import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs"

import { HttpClient, HttpHeaders } from '@angular/common/http'

export interface ProjectInterface {
  id?: number,
  name: string,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private apiUrl = "http://localhost:8080/api/v1/project"

  constructor(private http: HttpClient){}

  getProjects(): Observable<ProjectInterface[]> {
    return this.http.get<ProjectInterface[]>(this.apiUrl)
  }

  createProject(project: ProjectInterface): Observable<ProjectInterface> {
    return this.http.post<ProjectInterface>(this.apiUrl, project)
  }

  deleteProject(id: number): Observable<null> {
    return this.http.delete<null>(this.apiUrl + "/" + id)
  }
}
