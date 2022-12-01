import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { IndexComponent } from './components/index/index.component';



const routes: Routes = [
  {path: 'index', component:IndexComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
