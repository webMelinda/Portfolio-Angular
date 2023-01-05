import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../model/about';


@Injectable({
  providedIn: 'root'
})
export class AboutService {
  ruta = 'http://localhost:8080/persona/';

  constructor(private http: HttpClient) { }

  public verPersonas(): Observable<About[]>{
    return this.http.get<About[]>(`${this.ruta}lista`); 
  }

  public verPersona(id: number): Observable<About>{
    return this.http.get<About>(this.ruta + `ver/${id}`);
  }

  public editar(persona: About):Observable<any>{
    return this.http.put<any>(this.ruta +'editar', persona);
  }

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.ruta + `delete/${id}`);
  }
}
