import { Component, OnInit } from '@angular/core';
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

  constructor(private experienciaService:ExperienciaService, private aboutService: AboutService) { }

  ngOnInit(): void {
    this.experienciaService.verExperiencias().subscribe(data => {this.experiencia = data});
    this.aboutService.verPersonas().subscribe(data => {this.persona = data});
  
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else {
      this.modoEdit = true;
    } 
  }
  
  eliminar(id?: number){
    if(id !=undefined){
      if(confirm('¿Seguro desea eliminar este apartado?')){
        this.experienciaService.delete(id).subscribe(
          data =>{
            this.ngOnInit();
          })
      } window.location.reload(); 
      }}

}
