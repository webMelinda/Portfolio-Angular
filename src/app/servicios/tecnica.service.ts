import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnica } from '../model/tecnica';

@Injectable({
  providedIn: 'root'
})
export class TecnicaService {
  ruta = 'http://localhost:8080/tecnica/';

  constructor(private http: HttpClient) { }

  public verTecnicas(): Observable<Tecnica[]>{
    return this.http.get<Tecnica[]>(`${this.ruta}lista`); 
  }

  public editar(tecnica: Tecnica):Observable<any>{
    return this.http.put<any>(this.ruta +'update', tecnica);
  }

  public crearTecnica(tecnica: Tecnica): Observable<any>{
    return this.http.post<any>(this.ruta + 'crear', tecnica);
  } 

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.ruta + `delete/${id}`);
  }
}
