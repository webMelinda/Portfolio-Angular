import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/servicios/idioma.service';

@Component({
  selector: 'app-idioma-edit',
  templateUrl: './idioma-edit.component.html',
  styleUrls: ['./idioma-edit.component.css']
})
export class IdiomaEditComponent implements OnInit {
  form: FormGroup;
  idioma: Idioma;
  constructor(private formBuilder: FormBuilder, private idiomaService: IdiomaService, private activatedRoute:ActivatedRoute,
    private router:Router) {
      this.form= this.formBuilder.group({
        id:[''],
        nombre:[''],
        porcentaje:['',[Validators.required, Validators.min(0), Validators.max(100)]]
      })
     }

     ngOnInit(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.idiomaService.verIdioma(id).subscribe(data => {
        this.idioma=data;
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
      this.idiomaService.editar(this.form.value).subscribe(data => {
        alert("Idioma modificado.");
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
