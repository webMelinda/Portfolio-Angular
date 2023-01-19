import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/model/banner';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { BannerService } from 'src/app/servicios/banner.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';



@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banner: Banner[]= [];
  nombre: string='';
  foto: string='';
  titulo: string='';
  modoEdit: any;
  usuario: any;

  constructor(public bannerService: BannerService, private usuService: UsuarioService) { }

  ngOnInit(): void {
   this.bannerService.verBanners().subscribe(data => {this.banner = data});
   this.usuService.verUsuarios().subscribe(data =>{
    this.usuario = data
  });

  if (sessionStorage.getItem('currentUser') == "null"){
    this.modoEdit = false;
  }else if (sessionStorage.getItem('currentUser') == null){
    this.modoEdit = false;
  }else {
    this.modoEdit = true;
  }
  }

  onEdit(banner: Banner): void{
    this.bannerService.editarBanner(banner).subscribe(data => {alert("Experiencia Añadida")
  window.location.reload();
    });
  }

  
    
  }

