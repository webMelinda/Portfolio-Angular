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
  {path: '', component:IndexComponent},
  
  {path: 'editred/:id', component:RedEditComponent },
  {path: 'addred', component:AddRedComponent, canActivate: [GuardGuard]},
  {path: 'editbanner/:id', component:BannerEditComponent, canActivate: [GuardGuard]},
  {path: 'editabout/:id', component:AboutEditComponent, canActivate: [GuardGuard]},
  {path: 'editexpe/:id', component:ExperienceEditComponent, canActivate: [GuardGuard]},
  {path: 'editedu/:id', component:EducationEditComponent, canActivate: [GuardGuard]},
  {path: 'edittec/:id', component:SkillsEditComponent, canActivate: [GuardGuard]},
  {path: 'editidioma/:id', component:IdiomaEditComponent, canActivate: [GuardGuard]},
  {path: 'editsoft/:id', component:SoftEditComponent, canActivate: [GuardGuard]},
  {path: 'editproject/:id', component:ProjectEditComponent, canActivate: [GuardGuard]},
  {path: 'login', component:LoginComponent},
  {path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
