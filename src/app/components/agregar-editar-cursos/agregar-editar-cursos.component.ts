import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/interfaces/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-agregar-editar-cursos',
  templateUrl: './agregar-editar-cursos.component.html',
  styleUrls: ['./agregar-editar-cursos.component.css']
})
export class AgregarEditarCursosComponent implements OnInit {

  loading: boolean = false;
  form: FormGroup;
  id: number;

  operacion: string = 'Agregar';

  constructor( private fb: FormBuilder,
                private _snackBar: MatSnackBar,
                private _cursosService: CursosService,
                private router: Router,
                private aRoute: ActivatedRoute  ) { 
    this.form = this.fb.group({
      Name:['', Validators.required],
      Description:['', Validators.required],
      Teacher:['', Validators.required],
      Uri:['', Validators.required],
    })

    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    //console.log(this.id)
  }

  ngOnInit(): void {
    if(this.id != 0){
        this.operacion = 'Editar';
        this.obtenerCurso(this.id);
    }
  }

  obtenerCurso(id: number){
    this.loading = true;
    this._cursosService.getCurso(id).subscribe(data =>{
      this.form.patchValue({
        Name: data.name,
        Description: data.description,
        Teacher: data.teacher,
        Uri: data.uri

      })
      console.log(data);
      this.loading = false;
    })
  }

  agregarEditarCurso(){
    //const Name = this.form.get('Name')?.value;
    //const Name = this.form.value.Name;
    //console.log(Name)



    //armamos el objeto curso
    const curso: Curso = {
      name: this.form.value.Name,
      description: this.form.value.Description,
      teacher: this.form.value.Teacher,
      uri: this.form.value.Uri
    }
    
    if (this.id != 0) {
      curso.id = this.id;
      this.editarCurso(this.id, curso);
    }else{
      this.agregarCurso(curso);
    }
    
  }

  editarCurso(id:number, curso: Curso){
    this.loading = true;
    this._cursosService.updateCurso(id,curso).subscribe(() =>{
        this.loading = false;
        this.mensajeExito('actualizado');
        this.router.navigate(['/Cursos']);
    })
  }

  agregarCurso(curso: Curso){
    //Enviamos objeto al backend
    this._cursosService.addCurso(curso).subscribe(data => {
      //console.log(data);
      this.mensajeExito('creado');
      this.router.navigate(['/Cursos']);
    })
  }

  mensajeExito(text: string){
    this._snackBar.open(`El curso fue correctamente ${text}.`, '',{
      duration:3000,
      horizontalPosition:'right',
    });
  }

}
