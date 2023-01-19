import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/about';
import { Idioma } from 'src/app/model/idioma';
import { Soft } from 'src/app/model/soft';
import { Tecnica } from 'src/app/model/tecnica';
import { AboutService } from 'src/app/servicios/about.service';
import { IdiomaService } from 'src/app/servicios/idioma.service';
import { SoftService } from 'src/app/servicios/soft.service';
import { TecnicaService } from 'src/app/servicios/tecnica.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  tecnica: Tecnica[] = [];
  idioma: Idioma[] =[];
  soft: Soft[] = [];
  persona: About[] = [];
  modoEdit: any;

  constructor(public tecnicaService: TecnicaService, public idiomaService: IdiomaService, public softService: SoftService, private aboutService: AboutService) { }

  ngOnInit(): void {
  this.tecnicaService.verTecnicas().subscribe(data => {this.tecnica = data});
  this.idiomaService.verIdiomas().subscribe(data => {this.idioma = data});
  this.softService.verSofts().subscribe(data => {this.soft = data});
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
        this.softService.delete(id).subscribe(
          data =>{
            this.ngOnInit();
          })
      } window.location.reload(); 
      }}
  
 eliminarIdioma(id?: number){
    if(id !=undefined){
      if(confirm('¿Seguro desea eliminar este apartado?')){
         this.idiomaService.delete(id).subscribe(
          data =>{
            this.ngOnInit();
          })
      } window.location.reload(); 
    }}

    eliminarTecnica(id?: number){
      if(id !=undefined){
        if(confirm('¿Seguro desea eliminar este apartado?')){
           this.tecnicaService.delete(id).subscribe(
            data =>{
              this.ngOnInit();
            })
        } window.location.reload(); 
      }}
    
}
