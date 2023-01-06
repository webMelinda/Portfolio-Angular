import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  form: FormGroup;
  project: Proyecto;
  constructor(private formBuilder: FormBuilder, private proyectoService: ProyectoService, private activatedRoute:ActivatedRoute,
    private router:Router) {
      this.form= this.formBuilder.group({
        id:[''],
        foto:[''],
        url:[''],
        nombre:[''],
       descripcion:['']
      })
     }

  

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.verProyecto(id).subscribe(data => {
      this.project=data;
      console.log(data)
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
  }

  get Foto(){
    return this.form.get("foto");
  }

  get url(){
    return this.form.get("url");
  }
  get Nombre(){
    return this.form.get("nombre");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }

  onUpdate():void{
    this.proyectoService.editar(this.form.value).subscribe(data => {
      alert("El proyecto fue modificado.");
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
