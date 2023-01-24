import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../model/banner';

@Injectable({
  providedIn: 'root'
})

export class BannerService {
  ruta = 'https://argenprogram-backend.onrender.com/banner/';

  constructor(private http: HttpClient) { }

  public verBanners(): Observable<Banner[]>{
    return this.http.get<Banner[]>(`${this.ruta}lista`); 
  }

  public verBanner(id: number): Observable<Banner>{
    return this.http.get<Banner>(this.ruta + `ver/${id}`);
  }

  public editarBanner(banner: Banner):Observable<any>{
    return this.http.put<any>(this.ruta +'editar', banner);
  }

  public borrarBanner(id: number):Observable<any>{
    return this.http.delete<any>(this.ruta + `delete/${id}`);
  }
}
