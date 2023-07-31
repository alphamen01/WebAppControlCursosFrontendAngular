import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/interfaces/curso';

const listCursos: Curso[] = [
  {Name:'C#',Description:'Curso de programacion', Teacher:'Luis Sanchez', Uri:'https://github.com/alphamen01?tab=repositories'},
  {Name:'C#',Description:'Curso de programacion', Teacher:'Luis Sanchez', Uri:'https://github.com/alphamen01?tab=repositories'},
  {Name:'C#',Description:'Curso de programacion', Teacher:'Luis Sanchez', Uri:'https://github.com/alphamen01?tab=repositories'},
  {Name:'C#',Description:'Curso de programacion', Teacher:'Luis Sanchez', Uri:'https://github.com/alphamen01?tab=repositories'},
  {Name:'C#',Description:'Curso de programacion', Teacher:'Luis Sanchez', Uri:'https://github.com/alphamen01?tab=repositories'},
  {Name:'C#',Description:'Curso de programacion', Teacher:'Luis Sanchez', Uri:'https://github.com/alphamen01?tab=repositories'},
  {Name:'C#',Description:'Curso de programacion', Teacher:'Luis Sanchez', Uri:'https://github.com/alphamen01?tab=repositories'},
  {Name:'C#',Description:'Curso de programacion', Teacher:'Luis Sanchez', Uri:'https://github.com/alphamen01?tab=repositories'},
  {Name:'C#',Description:'Curso de programacion', Teacher:'Luis Sanchez', Uri:'https://github.com/alphamen01?tab=repositories'},
  {Name:'C#',Description:'Curso de programacion', Teacher:'Luis Sanchez', Uri:'https://github.com/alphamen01?tab=repositories'},
  {Name:'C#',Description:'Curso de programacion', Teacher:'Luis Sanchez', Uri:'https://github.com/alphamen01?tab=repositories'},
  {Name:'C#',Description:'Curso de programacion', Teacher:'Luis Sanchez', Uri:'https://github.com/alphamen01?tab=repositories'},
  {Name:'C#',Description:'Curso de programacion', Teacher:'Luis Sanchez', Uri:'https://github.com/alphamen01?tab=repositories'},
  {Name:'Java',Description:'Curso de practico', Teacher:'Alexis Gutierrez', Uri:'https://github.com/guty'}
];


@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['Name','Description','Teacher','Uri'];
  dataSource = new MatTableDataSource<Curso>(listCursos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Items por pagina'
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
