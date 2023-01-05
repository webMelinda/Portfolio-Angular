import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/model/banner';
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

  constructor(public bannerService: BannerService) { }

  ngOnInit(): void {
   this.bannerService.verBanners().subscribe(data => {this.banner = data}) 
  }
  onEdit(banner: Banner): void{
    this.bannerService.editarBanner(banner).subscribe(data => {alert("Experiencia Añadida")
  window.location.reload();
    });
  }

  
    
  }

