import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { get } from 'http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from '../interfaces/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/cursos/';

  constructor(private http: HttpClient) {
  }
  getCursos(): Observable<Curso[]>{
   //this.http.get(this.myAppUrl + this.myApiUrl)
   return this.http.get<Curso[]>(`${this.myAppUrl}${this.myApiUrl}`)   
  }

  getCurso(id: number): Observable<Curso>{
    return this.http.get<Curso>(`${this.myAppUrl}${this.myApiUrl}${id}`)   
  }

  deleteCurso(id:number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }
}
