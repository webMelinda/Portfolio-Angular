import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Red } from 'src/app/model/red';
import { RedService } from 'src/app/servicios/red.service';

@Component({
  selector: 'app-add-red',
  templateUrl: './add-red.component.html',
  styleUrls: ['./add-red.component.css']
})
export class AddRedComponent implements OnInit {
  form: FormGroup;
  red: Red[] = [];
  nombre: string='';
  url: string='';
  icono: string=''
  

  constructor(private formBuilder: FormBuilder, private redService: RedService,  private router:Router) { 
    this.form= this.formBuilder.group({
      nombre:['', [Validators.required]],
      url:['', [Validators.required]],
      icono:['', [Validators.required]]
      
    })
   }
  

  ngOnInit(): void {
  }

  get Nombre(){
    return this.form.get("nombre");
   }
 
  get Url(){
     return this.form.get("url");
    }

  get Icono(){
      return this.form.get("icono");
     }

     onCreate(): void{
      this.redService.editarRed(this.form.value).subscribe(data => {alert("Red Añadida")
      });
      //console.log(this.form.value);
      this.router.navigate(['']);
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
