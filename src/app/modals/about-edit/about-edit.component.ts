import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/servicios/about.service';

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.css']
})
export class AboutEditComponent implements OnInit {
  form: FormGroup;
  about: About;

  constructor(private formBuilder: FormBuilder,  private aboutService: AboutService, private activatedRoute:ActivatedRoute,
    private router:Router) { 
    this.form= this.formBuilder.group({
      id: [''],
      nombre:[''],
      second_name:[''],
      apellido:[''],
      perfil_img:[''],
      about:[''],
      edad:[''],
      residencia:[''],
      email:['', [Validators.email]],

    })
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.aboutService.verPersona(id).subscribe(data => {
      this.about=data;
      console.log(data)
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
  }

  get Nombre(){
    return this.form.get("nombre");
   }

   get Second_name(){
    return this.form.get("second_name");
   }

   get Apellido(){
    return this.form.get("apellido");
   }

   get Perfil_img(){
    return this.form.get("perfil_img");
   }

   get About(){
    return this.form.get("about");
   }
   
   get Edad(){
    return this.form.get("edad");
   }

   get Residencia(){
    return this.form.get("residencia");
   }

  get Mail(){
    return this.form.get("email");
   }

   onUpdate():void{
    this.aboutService.editar(this.form.value).subscribe(data => {
      alert("Persona modificada.");
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
