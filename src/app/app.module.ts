import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoAcademicaComponent } from './tipo-academica/tipo-academica.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

 
import { ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    TipoAcademicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule
   
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
