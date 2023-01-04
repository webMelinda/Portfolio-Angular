import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  estudio: Educacion[] = []
  constructor(public eduService: EducacionService) { }

  ngOnInit(): void {
    this.eduService.verEducacions().subscribe(data => {this.estudio = data})
  }
  eliminar(id?: number){
    if(id !=undefined){
      if(confirm('¿Seguro desea eliminar este apartado?')){
        this.eduService.delete(id).subscribe(
          data =>{
            this.ngOnInit();
          })
      } window.location.reload(); 
      }}
}
