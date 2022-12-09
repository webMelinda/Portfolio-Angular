import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({
      habilidad:['',[Validators.required]],
      nombre:['', [Validators.required]],
      rango:['', [Validators.required, Validators.min(0), Validators.max(100)]],
    })
  }

  ngOnInit() {}

  get Habilidad(){
    return this.form.get("habilidad");
  }
 
  get Nombre(){
   return this.form.get("nombre");
  }

  get Rango(){
    return this.form.get("rango");
   }

  get HabilidadValid(){
    return this.Habilidad?.touched && !this.Habilidad?.valid;
  }

  get NombreValid() {
    return this.Nombre?.touched && !this.Nombre?.valid;
  }

  get RangoValid() {
    return this.Rango?.touched && !this.Rango?.valid;
  }
  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
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
