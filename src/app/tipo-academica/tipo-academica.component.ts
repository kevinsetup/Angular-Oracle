import { Component, OnInit } from '@angular/core';
import {tipo_academica} from './tipo-academica'
import {TipoAcademicaService  } from "./tipo-academica.service";
@Component({
  selector: 'app-tipo-academica',
  templateUrl: './tipo-academica.component.html',
  styleUrls: ['./tipo-academica.component.css']
})
export class TipoAcademicaComponent implements OnInit {
  tipos : tipo_academica[];
  displayedColumns: string[] = ['ID_TIPO_UNIDAD', 'NOMBRE', 'ESTADO']

  constructor(private tipo_academicaService: TipoAcademicaService ) { }
  ngOnInit(): void {
      this.tipo_academicaService.getTipo().subscribe(
        (data)=>{
          this.tipos = data['CURSOR_T'];
          console.log(this.tipos);
        }


      )
  }

}
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     