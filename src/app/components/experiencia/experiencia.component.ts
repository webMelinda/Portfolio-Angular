import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { About } from 'src/app/model/about';
import { Experiencia } from 'src/app/model/experiencia';
import { AboutService } from 'src/app/servicios/about.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: Experiencia[] = [];
  persona: About[] = [];
  modoEdit: any;
 
  
  

  constructor(private experienciaService:ExperienciaService, private aboutService: AboutService, private router:Router) { }

  ngOnInit(): void {
   // this.experienciaService.verExperiencias().subscribe(data => {this.experiencia = data});
    this.verExperiencia();
    this.aboutService.verPersonas().subscribe(data => {this.persona = data});
  
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else {
      this.modoEdit = true;
    } 
  }

  verExperiencia(): void {
    this.experienciaService.verExperiencias().subscribe(
      data => {
        this.experiencia = data;
      }
    )
  }
  

  eliminar(id: any): void {
   
    if(confirm('¿Seguro desea eliminar este apartado?')) {
      if(id !=undefined) {
           this.experienciaService.delete(id).subscribe( data => {
           // alert("Su Experiencia fue eliminada correctamente");    
            this.verExperiencia();
              });          
             
          } 
        
        } 

        } 
      

}
