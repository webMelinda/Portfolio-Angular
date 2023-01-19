import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  ruta = 'http://localhost:8080/persona/autenticacion/login';
  currentUserSubject:BehaviorSubject<any>;
  //sessionStorage: any;

  constructor(private http:HttpClient) {
    //console.log("El servicio de autenticación está corriendo");
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
   }

   loginPersona(credenciales: any): Observable<any>{
    //console.log(credenciales);
    var httpOptions={headers:new HttpHeaders({
        'ContentType':'application/json'
      })}
    return this.http.post<any>(this.ruta, credenciales, httpOptions).pipe(map(data=> {
        sessionStorage.setItem('currentUser',JSON.stringify(data));
        this.currentUserSubject.next(data);
        //console.log("autService está corriendo " + JSON.stringify(data));
        return data;
      }));
   }

  get usuarioAutenticado(){
    return this.currentUserSubject.value;
  }
}
