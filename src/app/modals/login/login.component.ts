import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { About } from 'src/app/model/about';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  email = '';
  clave = '';
  persona: About = new About ("", "", "", "", "", "", "", "", "", "");

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
      //console.log(JSON.stringify(this.form.value));
      this.autService.loginPersona(this.form.value).subscribe(data=> {
          //console.log("DATA: " + JSON.stringify(data.id));
          if (data){
            alert("Acceso correcto");
            this.ruta.navigate(['']);
          } else {
            alert("Acceso incorrecto, verifique email y contraseña");
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
