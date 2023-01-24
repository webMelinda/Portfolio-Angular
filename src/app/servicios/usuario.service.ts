import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  ruta = 'https://argenprogram-backend.onrender.com/usuario/';

  constructor(private http: HttpClient) { }
  public verUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.ruta}lista`); 
  }

  public verUsuario(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(this.ruta + `ver/${id}`);
  }

  public editar(usuario: Usuario):Observable<any>{
    return this.http.put<any>(this.ruta +'editar', usuario);
  }
  public crearUsuario(usuario: Usuario): Observable<any>{
    return this.http.post<any>(this.ruta + 'crear', usuario);
  } 

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.ruta + `delete/${id}`);
  }
}
