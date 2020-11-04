import { Injectable } from '@angular/core';
import { tipo_academica } from './tipo-academica';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable, Subscription, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TipoAcademicaService {
  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
  private url : string = 'http://localhost:1212/api/tipo'
  constructor(private http: HttpClient) {}
    getTipo(): Observable<tipo_academica[]>{
     return this.http.get<tipo_academica[]>(this.url);
    
    
   }
 






}
