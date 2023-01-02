import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  ruta = 'http://localhost:8080/experiencia/';
  constructor(private http: HttpClient) { }

  public verExperiencias(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.ruta}lista`); 
  }

  public editar(experiencia: Experiencia):Observable<any>{
    return this.http.put<any>(this.ruta +'update', experiencia);
  }

  public crearExperiencia(experiencia: Experiencia): Observable<any>{
    return this.http.post<any>(this.ruta + 'crear', experiencia);
  } 

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.ruta + `delete/${id}`);
  }
}
