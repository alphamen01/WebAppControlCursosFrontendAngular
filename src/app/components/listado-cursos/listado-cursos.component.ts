import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso';

const ELEMENT_DATA: Curso[] = [
  {Name:'C#',Description:'Curso de programacion', Teacher:'Luis Sanchez', Uri:'https://github.com/alphamen01?tab=repositories'}
];


@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent implements OnInit {

  displayedColumns: string[] = ['Name','Description','Teacher','Uri'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
