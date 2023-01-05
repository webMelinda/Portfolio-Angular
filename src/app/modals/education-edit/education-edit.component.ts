import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-education-edit',
  templateUrl: './education-edit.component.html',
  styleUrls: ['./education-edit.component.css']
})
export class EducationEditComponent implements OnInit {
  form: FormGroup;
  edu: Educacion;

  constructor(private formBuilder: FormBuilder, private eduService: EducacionService, private activatedRoute:ActivatedRoute,
    private router:Router) {
      this.form= this.formBuilder.group({
        id:[''],
        institucion:[''],
        titulo:[''],
        logo:['']
      })
     }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.eduService.verEducacion(id).subscribe(data => {
      this.edu=data;
      console.log(data)
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
  }

  get Institucion(){
    return this.form.get("institucion");
  }
  get Titulo(){
    return this.form.get("titulo");
  }

  get Logo(){
    return this.form.get("logo");
  }

  onUpdate():void{
    this.eduService.editar(this.form.value).subscribe(data => {
      alert("Educación modificada.");
      console.log(this.form.value);
      this.router.navigate(['']);
    }
    )
  }



  onEnviar(event: Event){
    event.preventDefault; 

  if (this.form.valid){
    this.onUpdate();
  }else{
    // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template 
    alert("No se pudo modificar")    
    this.form.markAllAsTouched(); 
  }
}
}
