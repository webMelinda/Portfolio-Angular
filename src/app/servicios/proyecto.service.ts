import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  ruta = 'https://argenprogram-backend.onrender.com/proyecto/';

  constructor(private http: HttpClient) { }

  public verProyectos(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(`${this.ruta}lista`); 
  }

  public verProyecto(id:number): Observable<Proyecto>{
    return this.http.get<Proyecto>(this.ruta + `ver/${id}`); 
  }

  public editar(proyecto: Proyecto):Observable<any>{
    return this.http.put<any>(this.ruta +'editar', proyecto);
  }

  public crearProyecto(proyecto: Proyecto): Observable<any>{
    return this.http.post<any>(this.ruta + 'crear', proyecto);
  } 

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.ruta + `borrar/${id}`);
  }
}
