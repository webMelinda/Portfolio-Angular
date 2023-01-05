import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.css']
})
export class AddEduComponent implements OnInit {
  form: FormGroup;
  institucion: string= '';
  titulo: string='';
  logo: string='';

  constructor(private formBuilder: FormBuilder, private eduService: EducacionService) { 
    this.form= this.formBuilder.group({
      institucion:['',[Validators.required]],
      titulo:['', [Validators.required]],
      logo:['']
    })
  }

  ngOnInit() {}

  get Institucion(){
    return this.form.get("institucion");
  }
 
  get Titulo(){
   return this.form.get("titulo");
  }

  get Logo(){
    return this.form.get("logo");
   }

  onCreate(): void{
    const edu = new Educacion(this.institucion, this.titulo, this.logo);
    this.eduService.crearEducacion(edu).subscribe(data => {alert("Educación Añadida")
  window.location.reload();
    });
  }

  limpiar(): void{
    this.form.reset();
  }

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      this.onCreate()
    }else{
      alert("falló la carga de datos, intente nuevamente");     
      this.form.markAllAsTouched(); 
    }
 
  }

}
