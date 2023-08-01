import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { ListadoCursosComponent } from './components/listado-cursos/listado-cursos.component';
import { AgregarEditarCursosComponent } from './components/agregar-editar-cursos/agregar-editar-cursos.component';
import { VerCursosComponent } from './components/ver-cursos/ver-cursos.component';

const routes: Routes = [
  {path: '',redirectTo:'Cursos', pathMatch:'full'},
  {path: 'Cursos',component: ListadoCursosComponent},
  {path: 'AgregarCurso',component:  AgregarEditarCursosComponent},
  {path: 'VerCurso/:id',component:  VerCursosComponent},
  {path: 'EditarCurso/:id',component:  AgregarEditarCursosComponent},
  {path: '**',redirectTo:'Cursos', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
