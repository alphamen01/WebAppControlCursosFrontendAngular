import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { error } from 'console';
import { TIMEOUT } from 'dns';
import { Curso } from 'src/app/interfaces/curso';
import { CursosService } from 'src/app/services/cursos.service';




@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name','teacher','uri','opciones'];
  dataSource = new MatTableDataSource<Curso>();
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _snackBar: MatSnackBar, 
              private _cursosService: CursosService) { }

  ngOnInit(): void {
    this.obtenerCursos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    if(this.dataSource.data.length > 0){
      this.paginator._intl.itemsPerPageLabel = 'Items por pagina'
    }    
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  obtenerCursos(){
    this.loading = true;
    this._cursosService.getCursos().subscribe(data =>{
      this.loading = false;
      this.dataSource.data = data;
    }, error => {
      this.loading = false;
      alert("Oppss ocurrio un error")
    })
  }

  /*obtenerCursos(){
    this.loading = true;
    this._cursosService.getCursos().subscribe({
    next: (data) => {
      this.loading = false;
      this.dataSource.data = data;},
    error: (e) => this.loading = false,
    complete: () => console.info('complete') 
    })
  }*/


  eliminarCurso(){

    this.loading = true;

    setTimeout(()=>{
      this.loading =false;
      this._snackBar.open('El curso fue correctamente eliminado.', '',{
        duration:3000,
        horizontalPosition:'right'
      });
    }, 3000);

    
  }

}
