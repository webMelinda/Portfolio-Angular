import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  red: any = []
  constructor(private datos:DatosService) { }

  ngOnInit(): void {this.datos.getDatos().subscribe(data =>{
    this.red = data.redes;
  })
  }

}
