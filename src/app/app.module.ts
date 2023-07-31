import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarCursosComponent } from './components/agregar-editar-cursos/agregar-editar-cursos.component';
import { ListadoCursosComponent } from './components/listado-cursos/listado-cursos.component';
import { VerCursosComponent } from './components/ver-cursos/ver-cursos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarCursosComponent,
    ListadoCursosComponent,
    VerCursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
