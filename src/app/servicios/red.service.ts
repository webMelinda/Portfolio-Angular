import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Red } from '../model/red';

@Injectable({
  providedIn: 'root'
})
export class RedService {
  ruta = 'https://argenprogram-backend.onrender.com/red/';

  constructor(private http: HttpClient) { }

  public verReds(): Observable<Red[]>{
    return this.http.get<Red[]>(`${this.ruta}lista`); 
  }

  public verRed(id: number): Observable<Red>{
    return this.http.get<Red>(this.ruta + `ver/${id}`);
  }

  public editarRed(red: Red):Observable<any>{
    return this.http.put<any>(this.ruta +'editar', red);
  }

  public crearRed(red: Red): Observable<any>{
    return this.http.post<any>(this.ruta + 'crear', red);
  } 

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.ruta + `borrar/${id}`);
  }
}
