import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { Curso } from 'src/app/interfaces/curso';
import { Material } from 'src/app/interfaces/material';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-ver-cursos',
  templateUrl: './ver-cursos.component.html',
  styleUrls: ['./ver-cursos.component.css']
})
export class VerCursosComponent implements OnInit, OnDestroy , AfterViewInit {

  id!: number;

  curso!: Curso;

  loading:boolean = false;

  routeSub!: Subscription;

  displayedColumns: string[] = ['name','description'];
  dataSource = new MatTableDataSource<Material>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  /* curso$!: Observable<Curso> PIPE ASYNC*/

  constructor(private _cursosService: CursosService,
              private aRoute: ActivatedRoute) {
                //const id = +this.aRoute.snapshot.paramMap.get('id')!;
                //const id = parseInt(this.aRoute.snapshot.paramMap.get('id')!);
                this.id = Number(this.aRoute.snapshot.paramMap.get('id')); //UNA OCPION PARA OBTNER EL ID POR RUTA
                //console.log(id)
               }

  ngOnInit(): void {
    /* this.curso$ = this._cursosService.getCurso(this.id) PIPE ASYNC*/
    /* this.routeSub = this.aRoute.params.subscribe(data => {
      //console.log(data);
      this.id = data['id'];
      this.obtenerCurso(); 
    }) */
    this.obtenerCurso();
    this.obtenerMateriales();
 
  }

  ngOnDestroy(): void {
      /* this.routeSub.unsubscribe(); */
  }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    /*if(this.dataSource.data.length > 0){
      this.paginator._intl.itemsPerPageLabel = 'Items por pagina';
    } */
      //this.dataSource.sort = this.sort;
      this.obtenerMateriales();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

   obtenerCurso(){
    this.loading = true;
    this._cursosService.getCurso(this.id).subscribe(data =>
      {
        this.curso = data;
        this.loading = false;
      })
  } 

  obtenerMateriales(){
    this._cursosService.getMateriales(this.id).subscribe(data =>{
      //console.log(data);
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })    
  }

  
}
