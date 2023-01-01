import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: Experiencia[] = []

  constructor(private experienciaService:ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaService.verExperiencias().subscribe(data => {this.experiencia = data}) 
  }

}
