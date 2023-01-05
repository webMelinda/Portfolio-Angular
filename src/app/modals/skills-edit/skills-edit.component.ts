import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnica } from 'src/app/model/tecnica';
import { TecnicaService } from 'src/app/servicios/tecnica.service';

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.css']
})
export class SkillsEditComponent implements OnInit {
  form: FormGroup;
  skill: Tecnica;
  constructor(private formBuilder: FormBuilder, private skillService: TecnicaService, private activatedRoute:ActivatedRoute,
    private router:Router) {
      this.form= this.formBuilder.group({
        id:[''],
        nombre:[''],
        porcentaje:['',[Validators.required, Validators.min(0), Validators.max(100)]]
      })
     }

  

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.verTecnica(id).subscribe(data => {
      this.skill=data;
      console.log(data)
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
  }

  get Nombre(){
    return this.form.get("tnombre");
  }

  get Porcentaje(){
    return this.form.get("porcentaje");
  }

  onUpdate():void{
    this.skillService.editar(this.form.value).subscribe(data => {
      alert("Habilidad técnica modificada.");
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
