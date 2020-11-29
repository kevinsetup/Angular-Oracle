import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable, Subscription, of } from 'rxjs';
import { unidad_academica } from '../models/unidad-academica';
import { campus } from '../models/campus';
import {facultad} from '../models/facultad';
@Injectable({
  providedIn: 'root'
})
export class UnidadAcademicaService {
  selectedAcad : unidad_academica;
  selectedCamp: campus;
  selectedFac : facultad;
  academica : unidad_academica[];
  campus : campus[];
  facultad : facultad[];

  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
  private url : string = 'http://localhost:1616/api/'
  constructor(private http: HttpClient) { 
    this.selectedAcad = new unidad_academica();
    this.selectedCamp = new campus();
    this.selectedFac = new facultad();
  }
  getAcad(): Observable<unidad_academica[]>{
    return this.http.get<unidad_academica[]>(this.url+"unidad");
  
   
  }
  getCampus(): Observable<campus[]>{
    return this.http.get<campus[]>(this.url+"unidad/campus");
  
   
  }
  getCampusFacultad(nom : String){
    return this.http.get<facultad[]>(this.url+"unidad/campus/"+nom);
  
   
  }
  postAcademica(unidad_acad : unidad_academica){
    return this.http.post(this.url+"unidad", unidad_acad , {headers: this.httpHeaders});
  }
  putAcademica(unidad_acad : unidad_academica){
    return this.http.put(this.url + 'unidad' +`/${unidad_acad.ID_UNIDAD}`, unidad_acad, {headers: this.httpHeaders});
  }
  deleteAcademica(id : number){
    return this.http.delete(this.url + "unidad"  + `/${id}`);
  }

 


}