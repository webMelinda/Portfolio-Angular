import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-button-logout',
  templateUrl: './button-logout.component.html',
  styleUrls: ['./button-logout.component.css']
})
export class ButtonLogoutComponent implements OnInit {
  usuario: any;
  modoEdit: any;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.verUsuarios().subscribe(data =>{
      this.usuario = data
    });
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else {
      this.modoEdit = true;
    }
  }
cerrarSesion(){
  sessionStorage.setItem('currentUser', "null");
  this.modoEdit = false;
  alert("sesion cerrada");
  window.location.reload();
  return this.modoEdit;
}


}
