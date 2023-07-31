import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-editar-cursos',
  templateUrl: './agregar-editar-cursos.component.html',
  styleUrls: ['./agregar-editar-cursos.component.css']
})
export class AgregarEditarCursosComponent implements OnInit {

  loading: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
