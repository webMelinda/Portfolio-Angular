import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  ruta = 'https://argenprogram-backend.onrender.com/educacion/';

  constructor(private http: HttpClient) { }

  public verEducacions(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.ruta}lista`); 
  }

  public verEducacion(id: number): Observable<Educacion>{
    return this.http.get<Educacion>(this.ruta + `ver/${id}`);
  }

  public editar(educacion: Educacion):Observable<any>{
    return this.http.put<any>(this.ruta +'editar', educacion);
  }

  public crearEducacion(educacion: Educacion): Observable<any>{
    return this.http.post<any>(this.ruta + 'crear', educacion);
  } 

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.ruta + `borrar/${id}`);
  }
}
