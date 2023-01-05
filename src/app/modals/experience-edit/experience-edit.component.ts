import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experience-edit',
  templateUrl: './experience-edit.component.html',
  styleUrls: ['./experience-edit.component.css']
})
export class ExperienceEditComponent implements OnInit {
  form: FormGroup;
  experiencia: Experiencia;
  constructor(private formBuilder: FormBuilder, private expeService: ExperienciaService, private activatedRoute:ActivatedRoute,
    private router:Router) { 
      this.form= this.formBuilder.group({
        id:[''],
        institucion:[''],
        puesto:[''],
        periodo:[''],
        logo:['']
      })
    }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.expeService.verExperiencia(id).subscribe(data => {
      this.experiencia=data;
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

  get Puesto(){
    return this.form.get("puesto");
  }

  get Periodo(){
    return this.form.get("periodo");
  }

  get Logo(){
    return this.form.get("logo");
  }

  onUpdate():void{
    this.expeService.editar(this.form.value).subscribe(data => {
      alert("Experiencia modificada.");
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
