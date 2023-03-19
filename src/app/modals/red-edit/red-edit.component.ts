import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Red } from 'src/app/model/red';
import { RedService } from 'src/app/servicios/red.service';

@Component({
  selector: 'app-red-edit',
  templateUrl: './red-edit.component.html',
  styleUrls: ['./red-edit.component.css']
})
export class RedEditComponent implements OnInit {

  form: FormGroup;
  red: Red[] = [];

   constructor(private formBuilder: FormBuilder, private redService: RedService, private activatedRoute:ActivatedRoute,
    private router:Router) {
    this.form= this.formBuilder.group({
      id:[''],
      nombre:['',[Validators.required]],
      url:['',[Validators.required]],
      icono:['',[Validators.required]]
    })
    }

         
      ngOnInit(): void { 
        this.cargarRed();
        this.form.reset();
      }
    
      cargarRed(): void {
        this.redService.verReds().subscribe(
          data => {
            this.red = data;
          }
        )
      }
    
      cargarDetalle(id: number) {
        this.redService.verRed(id).subscribe(
          {
            next: (data) => {
              this.form.setValue(data);
            },
            error: (e) => {
              console.error(e)
              alert("error al modificar")
            },
            complete: () => console.info('completar aquí')
          }
        )
      }
    

    get Url(){
      return this.form.get("url");
    }

    get Nombre(){
      return this.form.get("nombre");
    }

    get Icono(){
      return this.form.get("icono");
    }

    onUpdate():void{
      this.redService.editarRed(this.form.value).subscribe(data => {
        console.log(this.form.value);
        this.router.navigate(['']);
        //alert("Red modificada.");
      }
      )
    }


    eliminar(id?: number) {
      if (id != undefined) {
        if (confirm('¿Seguro desea eliminar este apartado?')) {
          this.redService.delete(id).subscribe(
            data => {
              
            },
            error => {
              alert("El apartado fue eliminado correctamente");
              this.router.navigate(['']);
            })
            
        }   
      }
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
