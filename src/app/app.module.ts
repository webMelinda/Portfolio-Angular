import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './modals/login/login.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { ButtonLoginComponent } from './components/button-login/button-login.component';
import { IndexComponent } from './components/index/index.component';
import { ButtonLogoutComponent } from './components/button-logout/button-logout.component';
import { DeleteComponent } from './modals/delete/delete.component';
import { AddEduComponent } from './modals/add-edu/add-edu.component';
import { BannerEditComponent } from './modals/banner-edit/banner-edit.component';
import { AboutEditComponent } from './modals/about-edit/about-edit.component';
import { AddSkillsComponent } from './modals/add-skills/add-skills.component';
import { AddProjectComponent } from './modals/add-project/add-project.component';
import { SkillsEditComponent } from './modals/skills-edit/skills-edit.component';
import { ProjectEditComponent } from './modals/project-edit/project-edit.component';
import { AddExperienceComponent } from './modals/add-experience/add-experience.component';
import { ExperienceEditComponent } from './modals/experience-edit/experience-edit.component';
import { EducationEditComponent } from './modals/education-edit/education-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    BannerComponent,
    AboutMeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    ErrorComponent,
    ButtonLoginComponent,
    IndexComponent,
    ButtonLogoutComponent,
    DeleteComponent,
    AddEduComponent,
    BannerEditComponent,
    AboutEditComponent,
    AddSkillsComponent,
    AddProjectComponent,
    SkillsEditComponent,
    ProjectEditComponent,
    AddExperienceComponent,
    ExperienceEditComponent,
    EducationEditComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
