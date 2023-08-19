import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonIconComponent } from './components/button-icon/button-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectFormComponent,
    ButtonIconComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
