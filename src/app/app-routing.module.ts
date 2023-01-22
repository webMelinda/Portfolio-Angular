import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { IndexComponent } from './components/index/index.component';
import { GuardGuard } from './servicios/guard.guard';
import { AboutEditComponent } from './modals/about-edit/about-edit.component';
import { BannerEditComponent } from './modals/banner-edit/banner-edit.component';
import { EducationEditComponent } from './modals/education-edit/education-edit.component';
import { ExperienceEditComponent } from './modals/experience-edit/experience-edit.component';
import { IdiomaEditComponent } from './modals/idioma-edit/idioma-edit.component';
import { LoginComponent } from './modals/login/login.component';
import { ProjectEditComponent } from './modals/project-edit/project-edit.component';
import { SkillsEditComponent } from './modals/skills-edit/skills-edit.component';
import { SoftEditComponent } from './modals/soft-edit/soft-edit.component';
import { RedEditComponent } from './modals/red-edit/red-edit.component';
import { AddRedComponent } from './modals/add-red/add-red.component';




const routes: Routes = [
  {path: '', component:IndexComponent,canActivate: [GuardGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'editred/:id', component:RedEditComponent,canActivate: [GuardGuard]},
  {path: 'addred', component:AddRedComponent},
  {path: 'editbanner/:id', component:BannerEditComponent},
  {path: 'editabout/:id', component:AboutEditComponent},
  {path: 'editexpe/:id', component:ExperienceEditComponent},
  {path: 'editedu/:id', component:EducationEditComponent},
  {path: 'edittec/:id', component:SkillsEditComponent},
  {path: 'editidioma/:id', component:IdiomaEditComponent},
  {path: 'editsoft/:id', component:SoftEditComponent},
  {path: 'editproject/:id', component:ProjectEditComponent},
  {path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
