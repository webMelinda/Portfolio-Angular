import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto: Proyecto[] = []
  constructor(public proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoService.verProyectos().subscribe(data => {this.proyecto = data})
  }

  eliminar(id?: number){
    if(id !=undefined){
      if(confirm('¿Seguro desea eliminar este apartado?')){
        this.proyectoService.delete(id).subscribe(
          data =>{
            this.ngOnInit();
          })
      } window.location.reload(); 
      }}
}
