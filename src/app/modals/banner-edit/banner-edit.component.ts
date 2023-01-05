import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/servicios/banner.service';

@Component({
  selector: 'app-banner-edit',
  templateUrl: './banner-edit.component.html',
  styleUrls: ['./banner-edit.component.css']
})
export class BannerEditComponent implements OnInit {
  form: FormGroup;
  banner: Banner;

   constructor(private formBuilder: FormBuilder, private bannerService: BannerService, private activatedRoute:ActivatedRoute,
    private router:Router) {
    this.form= this.formBuilder.group({
      id:[''],
      titulo:['',[Validators.required]],
      nombre:['',[Validators.required]],
      foto:['',[Validators.required]]
    })
    }

    ngOnInit() {
      const id = this.activatedRoute.snapshot.params['id'];
    this.bannerService.verBanner(id).subscribe(data => {
      this.banner=data;
      console.log(data)
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
    }

    get Titulo(){
      return this.form.get("titulo");
    }

    get Nombre(){
      return this.form.get("nombre");
    }

    get Foto(){
      return this.form.get("foto");
    }

    onUpdate():void{
      this.bannerService.editarBanner(this.form.value).subscribe(data => {
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
