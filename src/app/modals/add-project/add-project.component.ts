import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({
      proyecto:['',[Validators.required]],
      descripcion:['', [Validators.required]],
    })
  }

  ngOnInit() {}

  get Proyecto(){
    return this.form.get("proyecto");
  }
 
  get Descripcion(){
   return this.form.get("descripcion");
  }

  get ProyectoValid(){
    return this.Proyecto?.touched && !this.Proyecto?.valid;
  }

  get DescripcionValid() {
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }

  onEnviar(event: Event){
    
    event.preventDefault; 
 
    if (this.form.valid){
      alert("Todo salio bien ¡Enviar formuario!")
    }else{     
      this.form.markAllAsTouched(); 
    }
 
  }

}
