import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';


@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private autenticacionServicio: AutenticacionService, private rutas: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let currentUser = this.autenticacionServicio.usuarioAutenticado;

      if(currentUser && currentUser.id){
        //this.rutas.navigate([''])
        return true;
      }else {
        this.rutas.navigate([''])
        alert("Para realizar alguna modificación, debes ir a login primero")
        return false;
       }
      
  }

  
  
}
