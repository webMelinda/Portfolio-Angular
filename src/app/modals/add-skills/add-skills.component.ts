import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Tecnica } from 'src/app/model/tecnica';
import { TecnicaService } from 'src/app/servicios/tecnica.service';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent implements OnInit {
  form: FormGroup;
  nombre: string='';
  porcentaje: string='';

  constructor(private formBuilder: FormBuilder, private tecnicaService: TecnicaService) { 
    this.form= this.formBuilder.group({
      nombre:['', [Validators.required]],
      rango:['', [Validators.required, Validators.min(0), Validators.max(100)]],
    })
  }

  ngOnInit() {}


 
  get Nombre(){
   return this.form.get("nombre");
  }

  get Rango(){
    return this.form.get("rango");
   }

 
  onCreate(): void{
    const tec = new Tecnica(this.nombre, this.porcentaje);
    this.tecnicaService.crearTecnica(tec).subscribe(data => {
    },
    error => {
      window.location.reload()
      alert("Técnica Añadida");


    });
     
   }
 
   agregar(): void{
    
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
      this.form.markAllAsTouched(); 
    }
 
  }

}
