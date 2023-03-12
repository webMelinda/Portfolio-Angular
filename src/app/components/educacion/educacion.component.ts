import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/about';
import { Educacion } from 'src/app/model/educacion';
import { AboutService } from 'src/app/servicios/about.service';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  estudio: Educacion[] = [];
  persona: About[] = [];
  modoEdit: any;

  constructor(public eduService: EducacionService, private aboutService: AboutService) { }

  ngOnInit(): void {
    this.eduService.verEducacions().subscribe(data => {this.estudio = data});
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
        this.eduService.delete(id).subscribe(
          data =>{
            this.ngOnInit();
          })
      } //window.location.reload(); 
      }}
}
