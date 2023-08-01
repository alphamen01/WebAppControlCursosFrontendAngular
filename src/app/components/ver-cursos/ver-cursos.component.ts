import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { Curso } from 'src/app/interfaces/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-ver-cursos',
  templateUrl: './ver-cursos.component.html',
  styleUrls: ['./ver-cursos.component.css']
})
export class VerCursosComponent implements OnInit, OnDestroy {

  id!: number;

  curso!: Curso;

  loading:boolean = false;

  routeSub!: Subscription;

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
  }

  ngOnDestroy(): void {
      /* this.routeSub.unsubscribe(); */
  }

   obtenerCurso(){
    this.loading = true;
    this._cursosService.getCurso(this.id).subscribe(data =>
      {
        this.curso = data;
        this.loading = false;
      })
  } 
}
