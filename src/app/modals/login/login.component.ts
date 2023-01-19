import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  email = '';
  clave = '';
  usuario: Usuario = new Usuario ("", "")

  constructor(private ruta: Router, private formBuilder: FormBuilder, private autService:AutenticacionService) { 
    this.form= this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      clave:['',[Validators.required, Validators.minLength(6)]], 
    })
  }

  ngOnInit(): void {
    sessionStorage.setItem('currentUser', null);
  }

  get Clave(){
    return this.form.get('clave');
  }
 
  get Email(){
   return this.form.get('email');
  }

  

  onEnviar(event: Event){

    event.preventDefault; 
 
    if (this.form.valid){
      console.log(JSON.stringify(this.form.value));
      this.autService.loginPersona(JSON.stringify(this.form.value)).subscribe(data=> {
          console.log("DATA: " + JSON.stringify(data.id));
          if (data.id){
            alert("Acceso correcto");
            this.ruta.navigate(['']);
          } else {
            alert("Acceso incorrecto");
          }
          
          
        }, error => {
          //this.ruta.navigate(['login'])
          alert("error al iniciar sesion")
        })
        
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      sessionStorage.setItem('currentUser', null);
      alert("Hay un error en el formulario")
    }
 
  }
 

}
