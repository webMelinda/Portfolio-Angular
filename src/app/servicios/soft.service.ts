import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Soft } from '../model/soft';

@Injectable({
  providedIn: 'root'
})
export class SoftService {
  ruta = 'https://argenprogram-backend.onrender.com/soft/';

  constructor(private http: HttpClient) { }

  public verSofts(): Observable<Soft[]>{
    return this.http.get<Soft[]>(`${this.ruta}lista`); 
  }

  public verSoft(id:number): Observable<Soft>{
    return this.http.get<Soft>(this.ruta + `ver/${id}`); 
  }

  public editar(soft: Soft):Observable<any>{
    return this.http.put<any>(this.ruta +'editar', soft);
  }

  public crearSoft(soft: Soft): Observable<any>{
    return this.http.post<any>(this.ruta + 'crear', soft);
  } 

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.ruta + `borrar/${id}`);
  }
}
