import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/servicios/idioma.service';

@Component({
  selector: 'app-add-idioma',
  templateUrl: './add-idioma.component.html',
  styleUrls: ['./add-idioma.component.css']
})
export class AddIdiomaComponent implements OnInit {
  form: FormGroup;
  nombre: string='';
  porcentaje: string='';

  constructor(private formBuilder: FormBuilder, private idiomaService: IdiomaService) {
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
 
   get NombreValid() {
     return this.Nombre?.touched && !this.Nombre?.valid;
   }
 
   get RangoValid() {
     return this.Rango?.touched && !this.Rango?.valid;
   }

   onCreate(): void{
    const idiom = new Idioma(this.nombre, this.porcentaje);
    this.idiomaService.crearIdioma(idiom).subscribe(data => {alert("Técnica Añadida")
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
      this.onCreate();
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
 
  }


}
