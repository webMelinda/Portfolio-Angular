import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  ruta = 'http://localhost:8080/proyecto/';

  constructor(private http: HttpClient) { }

  public verProyectos(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(`${this.ruta}lista`); 
  }

  public editar(proyecto: Proyecto):Observable<any>{
    return this.http.put<any>(this.ruta +'update', proyecto);
  }

  public crearProyecto(proyecto: Proyecto): Observable<any>{
    return this.http.post<any>(this.ruta + 'crear', proyecto);
  } 

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.ruta + `borrar/${id}`);
  }
}
