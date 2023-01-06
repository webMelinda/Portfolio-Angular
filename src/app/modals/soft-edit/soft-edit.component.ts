import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Soft } from 'src/app/model/soft';
import { SoftService } from 'src/app/servicios/soft.service';

@Component({
  selector: 'app-soft-edit',
  templateUrl: './soft-edit.component.html',
  styleUrls: ['./soft-edit.component.css']
})
export class SoftEditComponent implements OnInit {
  form: FormGroup;
  soft: Soft;
  constructor(private formBuilder: FormBuilder, private softService: SoftService, private activatedRoute:ActivatedRoute,
    private router:Router) {
      this.form= this.formBuilder.group({
        id:[''],
        nombre:[''],
        porcentaje:['',[Validators.required, Validators.min(0), Validators.max(100)]]
      })
     }

  

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.softService.verSoft(id).subscribe(data => {
      this.soft=data;
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
    this.softService.editar(this.form.value).subscribe(data => {
      alert("Habilidad blanda modificada.");
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
