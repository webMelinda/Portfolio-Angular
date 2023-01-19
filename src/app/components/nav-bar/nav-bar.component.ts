import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { DatosService } from 'src/app/servicios/datos.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  red: any = [];
  usuario: any;
  modoEdit: Boolean = false
  

  constructor(private datos:DatosService) { }

  ngOnInit(): void {this.datos.getDatos().subscribe(data =>{
    this.red = data.redes;
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
