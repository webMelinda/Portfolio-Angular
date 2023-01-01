import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-banner-edit',
  templateUrl: './banner-edit.component.html',
  styleUrls: ['./banner-edit.component.css']
})
export class BannerEditComponent implements OnInit {
  form: FormGroup;
  

   constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
      titulo:['',[Validators.required]],
      nombre:['',[Validators.required]],
    })
    }

    ngOnInit() {}

    get Titulo(){
      return this.form.get("titulo");
    }

    get TituloValid(){
      return this.Titulo?.touched && !this.Titulo?.valid;
    }

    get Nombre(){
      return this.form.get("nombre");
    }

    get NombreValid(){
      return this.Nombre?.touched && !this.Nombre?.valid;
    }

    onEnviar(event: Event){
      event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
  }

}
