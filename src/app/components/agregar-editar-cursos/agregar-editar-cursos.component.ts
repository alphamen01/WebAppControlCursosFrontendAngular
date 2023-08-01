import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Curso } from 'src/app/interfaces/curso';

@Component({
  selector: 'app-agregar-editar-cursos',
  templateUrl: './agregar-editar-cursos.component.html',
  styleUrls: ['./agregar-editar-cursos.component.css']
})
export class AgregarEditarCursosComponent implements OnInit {

  loading: boolean = false;
  form: FormGroup

  constructor( private fb: FormBuilder) { 
    this.form = this.fb.group({
      Name:['', Validators.required],
      Description:['', Validators.required],
      Teacher:['', Validators.required],
      Uri:['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarCurso(){
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
    console.log(curso)
  }

}
