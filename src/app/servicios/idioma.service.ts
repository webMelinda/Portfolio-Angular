import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idioma } from '../model/idioma';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {
  ruta = 'http://localhost:8080/idioma/';

  constructor(private http: HttpClient) { }

  public verIdiomas(): Observable<Idioma[]>{
    return this.http.get<Idioma[]>(`${this.ruta}lista`); 
  }

  public editar(idioma: Idioma):Observable<any>{
    return this.http.put<any>(this.ruta +'update', idioma);
  }

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.ruta + `delete/${id}`);
  }
}
