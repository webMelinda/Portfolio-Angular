import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/about';
import { Red } from 'src/app/model/red';
import { AboutService } from 'src/app/servicios/about.service';
import { DatosService } from 'src/app/servicios/datos.service';
import { RedService } from 'src/app/servicios/red.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  red: Red[] = [];
  persona: About[] = [];
  modoEdit: Boolean = false
  

  constructor(private redService: RedService, private aboutService: AboutService) { }

  ngOnInit(): void {this.redService.verReds().subscribe(data =>{this.red= data});

  this.aboutService.verPersonas().subscribe(data =>{
    this.persona = data
  });
  
  if (sessionStorage.getItem('currentUser') == "null"){
    //console.log("no se puede entrar");
    this.modoEdit = false;
  }else if (sessionStorage.getItem('currentUser') == null){
    //console.log("no se puede entrar, no existe el usuario");
    this.modoEdit = false;
  }else {
    //console.log("Login con éxito!");
    this.modoEdit = true;
  }
  
  }

  cerrarSesion(){
    sessionStorage.setItem('currentUser', "null");
    this.modoEdit = false;
    alert("sesión cerrada");
    window.location.reload();
    return this.modoEdit;
  }

}
