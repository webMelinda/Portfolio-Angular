import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idioma } from '../model/idioma';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {
  ruta = 'https://argenprogram-backend.onrender.com/idioma/';

  constructor(private http: HttpClient) { }

  public verIdiomas(): Observable<Idioma[]>{
    return this.http.get<Idioma[]>(`${this.ruta}lista`); 
  }

  public verIdioma(id:number): Observable<Idioma>{
    return this.http.get<Idioma>(this.ruta + `ver/${id}`); 
  }

  public editar(idioma: Idioma):Observable<any>{
    return this.http.put<any>(this.ruta +'editar', idioma);
  }

  public crearIdioma(idioma: Idioma): Observable<any>{
    return this.http.post<any>(this.ruta + 'crear', idioma);
  } 

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.ruta + `borrar/${id}`);
  }
}
