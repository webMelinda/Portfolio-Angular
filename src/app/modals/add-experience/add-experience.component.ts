import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {
  form: FormGroup;
  institucion: string= '';
  puesto: string='';
  periodo: string='';
  logo: string='';

  constructor(private formBuilder: FormBuilder, private experienciaService:ExperienciaService, private router:Router) { 
    this.form= this.formBuilder.group({
      empresa:['',[Validators.required]],
      periodo:['', [Validators.required]],
      puesto:[''],
      logo:['']
    })
  }
  

  ngOnInit() {}

  get Empresa(){
    return this.form.get("empresa");
  }
 
  get Periodo(){
   return this.form.get("periodo");
  }

  get Logo(){
    return this.form.get("logo");
  }
 
  get Puesto(){
   return this.form.get("puesto");
  }

  

  onCreate(): void{
   this.agregar();
  window.location.reload();
    
  }

  agregar(): void{
    const expe = new Experiencia(this.institucion, this.puesto, this.periodo, this.logo);
    this.experienciaService.crearExperiencia(expe).subscribe(data => {alert("Experiencia Añadida")
    });
  }

  limpiar(): void{
    this.form.reset();
  }
  
  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      this.onCreate();
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      alert("falló la carga de datos, intente nuevamente");
      this.form.markAllAsTouched(); 
    }
 
  }

 
    
}
