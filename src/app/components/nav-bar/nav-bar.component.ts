import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/servicios/about.service';
import { DatosService } from 'src/app/servicios/datos.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  red: any = [];
  persona: About[] = [];
  modoEdit: Boolean = false
  

  constructor(private datos:DatosService, private aboutService: AboutService) { }

  ngOnInit(): void {this.datos.getDatos().subscribe(data =>{
    this.red = data.redes;
  });

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
