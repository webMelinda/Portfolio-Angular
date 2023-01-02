import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Soft } from '../model/soft';

@Injectable({
  providedIn: 'root'
})
export class SoftService {
  ruta = 'http://localhost:8080/soft/';

  constructor(private http: HttpClient) { }

  public verSofts(): Observable<Soft[]>{
    return this.http.get<Soft[]>(`${this.ruta}lista`); 
  }

  public editar(soft: Soft):Observable<any>{
    return this.http.put<any>(this.ruta +'update', soft);
  }

  public crearSoft(soft: Soft): Observable<any>{
    return this.http.post<any>(this.ruta + 'crear', soft);
  } 

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.ruta + `delete/${id}`);
  }
}
