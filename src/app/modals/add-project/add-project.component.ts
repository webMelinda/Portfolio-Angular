import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  form: FormGroup;
  foto: string='';
  url: string='';
  nombre: string='';
  descripcion: string='';


  constructor(private formBuilder: FormBuilder, private proyectoService: ProyectoService) { 
    this.form= this.formBuilder.group({
      foto:[''],
      url:[''],
      nombre:['',[Validators.required]],
      descripcion:['', [Validators.required]]
    })
  }

  ngOnInit() {}

  get Nombre(){
    return this.form.get("nombre");
  }
 
  get Descripcion(){
   return this.form.get("descripcion");
  }

  get Foto(){
    return this.form.get("foto");
  }

  get Url(){
    return this.form.get("url");
  }


  onCreate(): void{
    this.agregar();
   window.location.reload();
     
   }
 
   agregar(): void{
    const project = new Proyecto(this.foto, this.url, this.nombre, this.descripcion);
    this.proyectoService.crearProyecto(project).subscribe(data => {alert("Proyecto Añadido");
    });
   }
 
    limpiar():void{
      this.form.reset();
    }

  onEnviar(event: Event){
    
    event.preventDefault; 
 
    if (this.form.valid){
      this.onCreate();
    }else{ 
      alert("falló la carga, intenta nuevamente");    
      this.form.markAllAsTouched(); 
    }
 
  }

}
