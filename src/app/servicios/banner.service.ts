import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../model/banner';

@Injectable({
  providedIn: 'root'
})

export class BannerService {
  ruta = 'http://localhost:8080/banner/';

  constructor(private http: HttpClient) { }

  public verBanners(): Observable<Banner[]>{
    return this.http.get<Banner[]>(`${this.ruta}lista`); 
  }

  public editarBanner(banner: Banner):Observable<any>{
    return this.http.put<any>(this.ruta +'update', banner);
  }

  public borrarBanner(id: number):Observable<any>{
    return this.http.delete<any>(this.ruta + `delete/${id}`);
  }
}
