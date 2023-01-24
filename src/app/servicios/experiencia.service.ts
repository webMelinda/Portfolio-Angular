import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  ruta = 'https://argenprogram-backend.onrender.com/experiencia/';
  constructor(private http: HttpClient) { }

  public verExperiencias(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.ruta}lista`); 
  }

  public verExperiencia(id: number): Observable<Experiencia>{
    return this.http.get<Experiencia>(this.ruta + `ver/${id}`);
  }
  
  public editar(experiencia: Experiencia):Observable<any>{
    return this.http.put<any>(this.ruta +'editar', experiencia);
  }

  public crearExperiencia(experiencia: Experiencia): Observable<any>{
    return this.http.post<any>(this.ruta + 'crear', experiencia);
  } 

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.ruta + `borrar/${id}`);
  }
}
