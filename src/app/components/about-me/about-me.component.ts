import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/servicios/about.service';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  persona: About[] = []

  constructor(public aboutService:AboutService) { }

  ngOnInit(): void {
    this.aboutService.verPersonas().subscribe(data => {this.persona = data})
  }

}
