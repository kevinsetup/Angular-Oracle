import { Component, OnInit, Query, ɵConsole } from '@angular/core';
import { NgForm } from '@angular/forms';
import { unidad_academica } from '../unidad-academica/models/unidad-academica'
import { UnidadAcademicaService } from '../unidad-academica/services/unidad-academica.service';
import { campus } from './models/campus';
import { facultad } from './models/facultad'
import Swal from 'sweetalert2'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { __await } from 'tslib';
@Component({
  selector: 'app-unidad-academica',
  templateUrl: './unidad-academica.component.html',
  styleUrls: ['./unidad-academica.component.css']
})
export class UnidadAcademicaComponent implements OnInit {
  selectedGame = "Football";
  selectCampus = 'alo?';
  academica: unidad_academica[];
  campus: unidad_academica[];
  facultad: unidad_academica[];
  ID_UNIDAD: string;
  ID: string;
  constructor(public Unidad_academica: UnidadAcademicaService) { }
  ngOnInit(): void {
    this.getTipos();
    this.getCampus();
    console.log(this.selectCampus);


  }

  getAsycnWeb() {
    return new Promise((resolve, reject) => {
      this.Unidad_academica.getAcad().subscribe(

        (data => {

          resolve(data);
        })
      )

    })

  }

  getAsycnWebs() {
    return new Promise((resolve, reject) => {
      this.Unidad_academica.getCampus().subscribe(

        (data => {

          resolve(data);
        })
      )

    })

  }


  async getTipos() {
    this.getAsycnWeb()
      .then(data => {
        this.Unidad_academica.academica = data['CURSOR_U'] as unidad_academica[];
        console.log(this.Unidad_academica.academica);
      }).catch(error => {
        console.log(error);
      })
  }

  getCampus() {
    this.getAsycnWebs()
      .then(data => {
        this.Unidad_academica.campus = data['CURSOR_U'] as campus[];
        console.log(this.Unidad_academica.campus);
      })

  }

  changeCampus(value) {
    console.log(value.NOMBRE);
    this.ID_UNIDAD = value.ID_UNIDAD
    console.log(this.ID_UNIDAD);
    this.Unidad_academica.getCampusFacultad(value.NOMBRE).subscribe(
      (data) => {


        const filtered = data['CURSOR_U'].filter(function (el) {

          return el.FACULTADES != null;

        });


        this.Unidad_academica.facultad = filtered as facultad[];
        console.log(this.Unidad_academica.facultad);


      }

    );
  }
  changeFacult(value) {
    this.ID = value.ID;
    console.log(this.ID);

  }




  addAcad(form: NgForm) {
    console.log(form.value)
    if (form.value.ID_UNIDAD) {
      console.log("hay id ")
      this.Unidad_academica.putAcademica(form.value).subscribe(
        (res) => {
          console.log(res);

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Editado Correctamente!',
            showConfirmButton: false,
            timer: 1500

          })

          this.resetForm(form);
          this.getTipos();



        }
      )
    } else {
      console.log(form.value.ID_UNIDAD);
      this.Unidad_academica.postAcademica(form.value).subscribe(
        (res) => {
          console.log(res);
          this.getTipos();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Guardado Correcto!',
            showConfirmButton: false,
            timer: 1500
          })


        }

      )

    }


  }
  editAcad(academica: unidad_academica) {
    // this.Unidad_academica.selectedAcad = academica;

    this.Unidad_academica.selectedAcad = academica;



  }
  deleteTipo(id: number) {
    Swal.fire({
      title: 'Estás seguro de eliminar este elemento?',
      text: "No podrás recuperarlo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, elimínalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'Tu elemento fue eliminado correctamente.',
          'success'
        )
        this.Unidad_academica.deleteAcademica(id).subscribe(
          (res) => {
            this.getTipos();

          })

      }


    })
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.getCampus();


    }
  }
  reset() {
    this.Unidad_academica.selectedFac.ID_UNIDAD = 0;
    setTimeout(function () {

      console.log("ID DE LA FACULTAD = " + this.ID);
      if (this.ID == undefined) {

      }
    }, 2000);
  }



}
