import { Component, OnInit } from '@angular/core';
import { Soft } from 'src/app/model/soft';
import { SoftService } from 'src/app/servicios/soft.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  nombre: string='';
  porcentaje: string='';
  soft: Soft[]=[]
  
  
  constructor(private softService: SoftService) { }
  

  ngOnInit(): void {}
  

  

}
