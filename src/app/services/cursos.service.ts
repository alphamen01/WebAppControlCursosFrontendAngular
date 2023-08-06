import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { get } from 'http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from '../interfaces/curso';
import { Material } from '../interfaces/material';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/cursos/';
  private myApi1Url: string = 'api/materiales/';

  constructor(private http: HttpClient) {
  }
  getCursos(): Observable<Curso[]>{
   //this.http.get(this.myAppUrl + this.myApiUrl)
   return this.http.get<Curso[]>(`${this.myAppUrl}${this.myApiUrl}`);   
  }

  getCurso(id: number): Observable<Curso>{
    return this.http.get<Curso>(`${this.myAppUrl}${this.myApiUrl}${id}`) ;  
  }

  deleteCurso(id:number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addCurso(curso: Curso): Observable<Curso>{
    return this.http.post<Curso>(`${this.myAppUrl}${this.myApiUrl}`, curso);
  }

  updateCurso(id:number, curso:Curso): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`,curso); 
  }

  getMateriales(id:number): Observable<Material[]>{
   return this.http.get<Material[]>(`${this.myAppUrl}${this.myApi1Url}${id}`);   
  }
}
