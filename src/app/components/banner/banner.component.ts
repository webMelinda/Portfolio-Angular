import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/about';
import { Banner } from 'src/app/model/banner';
import { AboutService } from 'src/app/servicios/about.service';
import { BannerService } from 'src/app/servicios/banner.service';




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
  persona: About [] = [];

  constructor(public bannerService: BannerService, private aboutService: AboutService) { }

  ngOnInit(): void {
   this.bannerService.verBanners().subscribe(data => {this.banner = data});
   this.aboutService.verPersonas().subscribe(data =>{
    this.persona = data
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

