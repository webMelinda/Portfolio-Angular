import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Soft } from 'src/app/model/soft';
import { SoftService } from 'src/app/servicios/soft.service';

@Component({
  selector: 'app-add-soft',
  templateUrl: './add-soft.component.html',
  styleUrls: ['./add-soft.component.css']
})
export class AddSoftComponent implements OnInit {
  form: FormGroup;
  nombre: string='';
  porcentaje: string='';
  constructor(private formBuilder: FormBuilder, private softService: SoftService) { 
    this.form= this.formBuilder.group({
      nombre:['', [Validators.required]],
      rango:['', [Validators.required, Validators.min(0), Validators.max(100)]],
    })
  }

  ngOnInit(): void {
  }

  get Nombre(){
    return this.form.get("nombre");
   }
 
   get Rango(){
     return this.form.get("rango");
    }
 
   onCreate(): void{
    this.agregar();
   window.location.reload();
     
   }
 
   agregar(): void{
    const softy = new Soft(this.nombre, this.porcentaje);
     this.softService.crearSoft(softy).subscribe(data => {alert("Técnica Añadida");
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
       this.form.markAllAsTouched(); 
     }
  
   }

}
