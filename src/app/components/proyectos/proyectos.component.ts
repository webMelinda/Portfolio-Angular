import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/about';
import { Proyecto } from 'src/app/model/proyecto';
import { AboutService } from 'src/app/servicios/about.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto: Proyecto[] = [];
  persona: About[] = [];
  modoEdit: any;

  constructor(public proyectoService: ProyectoService, private aboutService: AboutService) { }

  ngOnInit(): void {
    this.proyectoService.verProyectos().subscribe(data => {this.proyecto = data});
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
        this.proyectoService.delete(id).subscribe(
          data =>{
            this.ngOnInit();
          })
      } //window.location.reload(); 
      }}
}
